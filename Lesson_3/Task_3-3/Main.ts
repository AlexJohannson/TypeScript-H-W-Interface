interface INumber {
    number: number;
}



let numberI: INumber = {
    number: 0
};

while (numberI.number < 20) {
    document.write('<h1>' + 'Oleksandr' + '</h1>');
    numberI.number++;
}