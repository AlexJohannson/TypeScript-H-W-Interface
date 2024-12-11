interface IString {
    a: string;
    b: string;
    c: string;
}
let itemString: IString = {
    a: 'hello world',
    b: 'lorem ipsum',
    c: 'typescript is cool'
};

console.log(itemString.a.length);
console.log(itemString.b.length);
console.log(itemString.c.length);
console.log(' ');

interface IArrayLenght extends Array<string> {}
const array: IArrayLenght = [itemString.a, itemString.b, itemString.c];
for (const item of array) {
    console.log(item.length);
}