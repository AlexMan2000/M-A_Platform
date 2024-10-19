/**
 * Generate a random int between min and max(exclusive)
 * @param min lower bound
 * @param max higher bound
 * @returns A random integer between [min, max)
 */
export function generateInt(min: number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
}