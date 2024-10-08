import { SparkMD5 } from "spark-md5"


export async function createChunk(
    file: File, // a file descriptor
    chunkIndex: number,
    CHUNKSIZE: number,
) {

    return new Promise((resolve, _) => {
        const startByte = chunkIndex * CHUNKSIZE;
        const endByte = startByte + CHUNKSIZE;

        const spark = new SparkMD5.ArrayBuffer();


        const fileReader = new FileReader();

        // 文件的二进制数据, 不是真正的读取步骤，只是标记了文件读取的开始和结束
        // represent the data to be read, not the actual data
        const blob = file.slice(startByte, endByte);

        // 数据读取完毕的回调
        fileReader.onload = (e) => {
            // e.target!.result is the actual binary data in the memory
            spark.append(e.target!.result);
            resolve({
                startByte,
                endByte,
                chunkIndex,
                hash: spark.end(), // compute hash
                blob
            })
        };
        fileReader.readAsArrayBuffer(blob);
    })
}


const CHUNKSIZE = 1024 * 1024 * 5; // 5MB
const NUM_THREADS = navigator.hardwareConcurrency || 4;


/**
 * 将一个文件切分成 CHUNKSIZE bytes 大小的块
 * @param file 文件描述符
 * @param chunksize : 每块的大小
 * 
 * @returns An array of chunks
 */
export async function cutFile(file: File, chunksize: number = CHUNKSIZE, thread_num: number = NUM_THREADS) {

    return new Promise((resolve, _) => {
        // 按照chunksize要分成几块
        const num_chunks = Math.ceil(file.size / chunksize);

        // 每个线程处理几块数据
        const thread_chunk_num = Math.ceil(num_chunks / thread_num);
        let finishedCount = 0; // 完成任务的线程数

        // 储存分片的结果
        const result = new Array(thread_chunk_num);

        for (let i = 0; i < thread_num; i++) {
            const worker = new Worker("./fileCutterWorker.ts", { type: "module" });

            // Each thread takes [start_index, end_index)
            const start_index = i * thread_chunk_num;
            let end_index = (i + 1) * thread_chunk_num;

            if (end_index > num_chunks) {
                end_index = num_chunks;
            }

            // 发送给每个线程的任务信息参数
            worker.postMessage({
                start_index,
                end_index,
                chunksize,
                file  // 文件描述符
            })

            // 当前子线程执行完毕后发送给主线程表示任务完成
            worker.onmessage = (e: any) => {
                result[i] = e.data;
                worker.terminate();
                finishedCount++;

                if (finishedCount === thread_num) {
                    resolve(result.flat());
                }
            }
        }
    })
}