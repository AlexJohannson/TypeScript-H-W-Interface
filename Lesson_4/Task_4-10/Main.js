var arrayMinimum = function (numbers) {
    var min = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        var number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
};
console.log(arrayMinimum([124, 894, 4, 7, -2, 45, -32]));
