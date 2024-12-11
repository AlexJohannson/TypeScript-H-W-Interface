var summa = function (array) {
    var cashRegister = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        cashRegister = cashRegister + item;
    }
    return cashRegister;
};
console.log(summa([23, 54, 87, 90, 43]));
