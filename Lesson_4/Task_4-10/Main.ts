interface IMinimum {
    (numbers: number[]): number;
}



const arrayMinimum: IMinimum = (numbers) => {
    let min: number = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number: number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinimum([124, 894, 4, 7, -2, 45, -32]));