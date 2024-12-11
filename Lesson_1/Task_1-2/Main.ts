interface IPerson{
    firstName: string;
    middleName: string;
    lastName: string;
}

let personName: IPerson = {
    firstName: 'Oleksandr',
    middleName: 'Mykolayovych',
    lastName: 'Mekhed'
};

let personFullName = personName.firstName + ' ' + personName.middleName + ' ' + personName.lastName;

console.log(personFullName);