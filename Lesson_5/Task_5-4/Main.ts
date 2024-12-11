interface IArrayNumber extends Array<number | string | boolean> {}
let arrayNumber: IArrayNumber = [1, 2, 4, 'okten', -24, true, 5673, false];

interface IFoobar {
    (arr: IArrayNumber): void;
}
let foobar: IFoobar = (arr) => {
    for (const item of arr) {
        console.log(item);
    }

}
foobar(arrayNumber);
