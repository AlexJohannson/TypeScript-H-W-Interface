interface IRadius {
    (radius: number): number;
}


const roundSquare: IRadius = (radius) => {
    return Math.PI * radius * radius;
}

roundSquare(2);
console.log(roundSquare(2));