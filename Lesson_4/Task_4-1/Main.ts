interface IFunction {
    (aNun: number, bNun: number): number;
}


const square: IFunction = (aNun, bNun) => {
    const result: number = aNun * bNun;
    console.log(result);
    return result;
}

square(12, 43);