interface ICylinder {
    (radius: number, height: number): number;
}


const squareCylinder: ICylinder = (radius, height) => {
    return 2 * Math.PI * radius * height;
}

console.log(squareCylinder(14, 25));