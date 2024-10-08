export function curry(fn, arr = []) {

    const total_len = fn.length;
    
    return function(...args) {
        const curr_args = [...arr, ...args];
        if (curr_args.length >= total_len) {
            return fn.apply(this, curr_args);
        } else {
            return curry(fn, curr_args);
        }
    }
}