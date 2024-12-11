interface IUser {
    name: string;
    age: number;
    status: boolean;
}



let users: IUser[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

/*--------------------    user.status true  -----------------------------*/

for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}
console.log('');

/*--------------------   user.status false --------------------------*/

for (const user of users) {
    if (!user.status) {
        console.log(user);
    }
}
console.log('');

/*--------------------------  user.status age ---------------------------------*/

for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}