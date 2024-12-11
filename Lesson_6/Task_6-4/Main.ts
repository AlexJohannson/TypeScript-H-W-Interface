interface INumberArray extends Array<number> {}

let numbers: INumberArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

const string = numbers.map(number => number + '');
console.log(string);