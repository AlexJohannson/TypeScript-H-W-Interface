var users = [
    {
        id: 1,
        name: 'John',
        age: 23
    },
    {
        id: 2,
        name: 'Oleksandr',
        age: 30
    },
    {
        id: 3,
        name: 'Inna',
        age: 32
    },
    {
        id: 4,
        name: 'Viktoria',
        age: 25
    }
];
var arr = function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        document.write("<div>".concat(user.id, ". ").concat(user.name, " - ").concat(user.age, "</div>"));
    }
};
arr(users);
