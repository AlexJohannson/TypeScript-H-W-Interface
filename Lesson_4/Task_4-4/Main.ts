interface IArr extends Array<string | number | boolean> {}



let arr: IArr = [1, 2, 4, 'okten', -24, true, 5673, false];
foobar(arr);

function foobar(arr) {
    for (const item of arr) {
        console.log(item);
    }
}