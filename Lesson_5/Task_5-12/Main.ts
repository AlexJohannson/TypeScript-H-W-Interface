interface ISwapArray extends Array<number> {}
let array: ISwapArray = [1232, 56, 83, 78, 34, 90];

interface IFunctionSwap {
    (arr: ISwapArray, i1: number, i2: number): number[] | string;
}

let swap: IFunctionSwap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return 'Error';
}

console.log(swap((array), 2, 3));