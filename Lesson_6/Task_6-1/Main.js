var itemString = {
    a: 'hello world',
    b: 'lorem ipsum',
    c: 'typescript is cool'
};
console.log(itemString.a.length);
console.log(itemString.b.length);
console.log(itemString.c.length);
console.log(' ');
var array = [itemString.a, itemString.b, itemString.c];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var item = array_1[_i];
    console.log(item.length);
}
