interface ISquareCylinder {
    (radius: number, height: number): number;
}


let squareCylinder: ISquareCylinder = (radius, height) => 2 * Math.PI * radius * height;
console.log(squareCylinder(3, 5));