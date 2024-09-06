import { v4 as uuidv4 } from 'uuid';

/** WebSocket is built in the browser and we don't need to npm install it
 * for client application, but for backend node server it is needed.
 */
class Ws extends WebSocket {

    // Singleton, one url only corresponds to one Websocket instance
    private static instances: Map<string, Ws> = new Map();

    private uid;

    // heart beat计时器对象，用于创建和释放资源
    private pingIntervalTimer;

    // pong response计时器对象，用于创建和释放资源
    private pongTimeoutTimer;


    private reconnectTimeoutTimer;


    private readonly pingIntervalTime = 3000; // 3 seconds
    private readonly pongTimeoutTime = 3000;   // 3 seconds
    private readonly reconnectTimeoutTime = 3000; 

    private connectedUrl: string;

    private constructor (url: string) {
        super(url); // Here it is trying to set ws's state to OPEN
        this.connectedUrl = url;
        this.uid = uuidv4();
        this.init();
    }

    
    // Singleton Pattern, remain one open 
    public static async create(url: string): Promise<Ws> {
        if (Ws.instances.has(url)) {
            const ws = Ws.instances.get(url)!;
            if (ws.readyState === WebSocket.OPEN) {
                // If the connection is still open, then we can directly return
                return ws;
            }
            if (ws.readyState === WebSocket.CLOSED) {
                // If the connection is closed, we cannot revert it back(absorption state in markov chain)
                // We will have to delete the mapping from the map and re-initialize a new ws obj
                Ws.instances.delete(url);
            }
        }

        return new Promise(resolve => {
            // Creatopm logic, many be async(involve I/O operations etc.)
            const ws: Ws = new Ws(url);
            Ws.instances.set(url, ws);
            resolve(ws);
        }) 
        
    }

    private init() {
        this.bindEvent();
    }

    private bindEvent() {
        // WS.OPEN状态时, 触发
        this.addEventListener('open', this.handleOpen, false);
        // 当ws的状态改变为CLOSED时 触发
        this.addEventListener('close', this.handleClose, false);
        this.addEventListener('error', this.handleError, false);
        this.addEventListener('message', this.handleMessage, false);
    }



    handleOpen () {
        console.log(`---Client is connected---`);
        this.startHeartBeat();
    }


    handleClose () {
        console.log(`---Client is closed, trying to reconnect---`);
        this.stopHeartBeat();
    }


    handleError (e) {
        console.log(`---Client connection error---` + e);
    }


    handleMessage (data: any) {
        // Need this to notify the object that the connection is still alive
        const {msg} = this.receiveMsg(data);
        console.log(`${msg}`);
    }

    
  


    startHeartBeat () {
        this.pingIntervalTimer = setInterval(() => {
            const heartBeatData = {
                mode: "HEART_BEAT",
                msg: "ping"
            }

            if (this.readyState === WebSocket.OPEN) {
                this.send(JSON.stringify(heartBeatData));
            } else {
                // 
                clearInterval(this.pingIntervalTimer)
            }
        
            this.waitForResponse();

        }, this.pingIntervalTime)

    }


    stopHeartBeat () {
        if (this.pingIntervalTimer) {
            clearInterval(this.pingIntervalTimer)
            this.pingIntervalTimer = null;
        }

        if (this.pongTimeoutTimer) {
            clearInterval(this.pongTimeoutTimer)
            this.pongTimeoutTimer = null;
        }
    }


    waitForResponse () {
        // 注意需要清除计时器
        if (this.pongTimeoutTimer) {
            clearInterval(this.pongTimeoutTimer)
            this.pongTimeoutTimer = null;
        }
        this.pongTimeoutTimer = setTimeout(() => {
            // 如果客户端在timeout前收到了消息则会触发handleMessage方法，然后
            // handleMessage方法内部会设置connectedStatus为true
            if (this.readyState === WebSocket.OPEN) {
                // 如果收到消息就立即重置计时器开始新一轮的heart beat
                return this.startHeartBeat();
            }
            // 服务器在规定的3s内未响应，则认为服务器挂了（但仍有可能服务器还开着）
            // 或者客户端出错触发了handleClose() ,客户端关闭连接并重连
            // 此时尝试重连
            try {
                // 如果客户端已经关闭，则会触发catch
                // 如果客户端没有关闭，则关闭客户端，相当于重置连接状态
                this.close()
            } catch (e) {
                console.log("Client is closed Error"+e);
            }
            // 尝试重连
            this.reconnect();
        }, this.pongTimeoutTime)
    }


    reconnect () {
        if (this.reconnectTimeoutTimer) {
            clearTimeout(this.reconnectTimeoutTimer);
        }
        // 3s 执行Ws.create(), 然后等待异步结果返回
        return new Promise(resolve => {
            this.reconnectTimeoutTimer = setTimeout(async () => {
                resolve(Ws.create(this.connectedUrl));
            }, this.reconnectTimeoutTime)
        })

    }

    public sendMsg(data: any) {
        if (this.readyState === WebSocket.OPEN) {
            this.send(JSON.stringify({
                mode: "MESSAGE",
                msg: data
            }));
        } else {
            console.error("WebSocket is not open. Ready state is: " + this.readyState);
        }
    }


    receiveMsg ({data}: any) {
        console.log("--- Client received message --- ")
        return JSON.parse(data);
    }

}



export default Ws;
