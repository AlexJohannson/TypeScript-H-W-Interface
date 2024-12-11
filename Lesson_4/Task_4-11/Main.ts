interface ISumma {
    (array: number[]): number;
}



const summa: ISumma = (array) => {
    let cashRegister = 0;
    for (const item of array) {
        cashRegister = cashRegister + item;
    }
    return cashRegister;
}

console.log(summa([23, 54, 87, 90, 43]));
