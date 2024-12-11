interface INum {
    number: number;
}
 let numName: INum = {
    number: 0
 };


for (numName.number = 0; numName.number < 10; numName.number++) {
    document.write(`<div>Oleksandr ${numName.number}</div>`);
}