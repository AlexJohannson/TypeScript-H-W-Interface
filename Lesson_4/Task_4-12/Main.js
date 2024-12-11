var array = [1232, 56, 83, 78, 34, 90];
var num = function (arr, i1, i2) {
    if (i1 < arr.length && i2 < arr.length) {
        var temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return 'error';
};
console.log(num((array), 0, 2));
