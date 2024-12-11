interface IArraySum extends Array<number> {}
let array: IArraySum = [12, 75, 3, 90, 736, 43, 78, 1, 32];

interface ISumma {
    (arr: IArraySum): number;
}
let sum: ISumma = (arr) => {
    let totalMoney = 0;
    for (const item of arr) {
        totalMoney = totalMoney + item;
    }
    return totalMoney;
}

console.log(sum(array));