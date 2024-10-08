import axios from 'axios';

/**
 * Concurrent Requests, 
 * @param urls An array of request endpoints
 * @param maxNum The max number of concurrent requests at the same time
 * 
 * @returns An array of responses with the same order as requests
 */
export function concurRequest(urls: string[], maxNum: number) {

    return new Promise((resolve, _) => {
        if (urls.length == 0) {
            resolve([]);
            return;
        }

        let pending = 0;
        let res = new Array(urls.length);
        let waitingQueue: number[] = [];
        let finishedCount = 0;

        // 执行请求所代表的异步任务
        const executeRequest = async (_, index) => {
            try {
                const result = await axios.get(urls[index]);
                res[index] = result.data;
            } catch (error) {
                res[index] = error;
            } finally {
                finishedCount++;
                pending--;
                if (waitingQueue.length > 0) {
                    const nextIndex = waitingQueue.shift();
                    processRequest(nextIndex);
                } else if (finishedCount === urls.length) {
                    resolve(res);
                }
            }
        }


        // 判断当前请求是否需要被挂起
        const processRequest = async (index) => {
            if (pending < maxNum) {
                pending++;
                executeRequest(urls[index], index);
            } else {
                waitingQueue.push(index);
            }

        }

        // 入口函数
        urls.forEach(async (_, index: number) => {
            processRequest(index);
        });
    })
}

// Delayed function, resolve after time milliseconds
function timeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("");
        }, time)
    })
}


class SuperTask {
    private tasks;
    private activeTask;
    private maxTaskNum;

    constructor(parallelCount = 2) {
        this.tasks = []; // 任务队列
        this.activeTask = 0; // 目前正在执行的任务有几个
        this.maxTaskNum = parallelCount;
    }

    add(task) {
        // 很多业务场景中我们需要在一个函数中创建Promise对象，但是需要在另一个函数中resolve/reject它，
        // 就必须通过一个task queue中介来实现。
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            });
            this._run();
        });
    }

    // 执行任务
    _run() {
        while (this.activeTask < this.maxTaskNum && this.tasks.length > 0) {
            const { task, resolve, reject } = this.tasks.shift();
            this.activeTask++;
            task().then(resolve, reject).finally(() => {
                this.activeTask--;
                this._run();
            })
        }
    }
}

const superTask = new SuperTask();

function addTask(time, name) {
    superTask
        .add(() => timeout(time))
        .then(() => {
            console.log(`任务${name}完成`);
        });
}

addTask(10000, 1);  // 10000ms 后输出，任务1完成
addTask(5000, 2); // 5000ms 后输出，任务1完成
addTask(3000, 3); // 8000ms 后输出，任务1完成
addTask(4000, 4); // 12000ms 后输出，任务1完成
addTask(5000, 5); // 15000ms 后输出，任务1完成


/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成以后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，即都不可中断，只能在两个任务之间中断
 * @param tasks  {...Function} tasks 任务列表，每个任务无参，异步
 */
export function processTasks(...tasks):Function[] {

    let isRunning = false;
    let nextTaskIndex = 0;
    let result = new Array(tasks.length);

    const start = async () => {
        isRunning = true;

        for (let i = nextTaskIndex; i < tasks.length && isRunning; i++) {
            try {
                result[i] = await tasks[i](); 
            } catch (error) {
                result[i] = error; 
            }
            nextTaskIndex++; 
        }

        if (isRunning) {
            return result; 
        }
    }

    const pause = () => {
        isRunning = false;
    }

    return [start, pause]
}
