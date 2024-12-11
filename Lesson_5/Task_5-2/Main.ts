interface IRoundSquare {
    (radius: number): number;
}

let roundSquare: IRoundSquare = (radius) => Math.PI * radius * radius;
console.log(roundSquare(5));