interface ISqure {
    (aNun: number, bNun: number): number;
}


let square: ISqure = (aNun, bNun) => aNun * bNun;
console.log(square(12, 21));