interface IUser {
    id: number;
    name: string;
    age: number;
}

let users: IUser[] = [
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

interface IArrUser {
    (users: IUser[]): void;
}

let arr: IArrUser = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age}</div>`);
    }
}
arr(users);