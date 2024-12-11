interface IArray extends Array<number> {}

let array: IArray = [1232, 56, 83, 78, 34, 90];


interface ISwap {
    (arr: number[], i1: number, i2: number): number[] | string;
}

const num: ISwap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return 'error';
}

console.log(num((array), 0, 2));