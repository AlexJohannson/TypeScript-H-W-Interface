interface INumber  {
    number: number;
}



let numI: INumber = {
    number: 0
}

while (numI.number < 20) {
    document.write(`<h1>Oleksandr ${numI.number}</h1>`);
    numI.number++;
}