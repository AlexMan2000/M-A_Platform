import {createChunk} from "./fileCutter"

onmessage = async (e) => {
    const  {
        start_index,
        end_index,
        chunksize,
        file
    } = e.data;
    
    const promiseObjs: Promise<any>[] = [];

    for (let i = start_index; i < end_index; i++) {
        const promiseObj = createChunk(file, start_index, chunksize);
        promiseObjs.push(promiseObj);
    }

    const results = await Promise.all(promiseObjs);
    postMessage(results);

    // Promise.all(promiseObjs).then((res)=> {
    //     postMessage(res);
    // })
}