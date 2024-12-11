interface INumberOfDay {
    day: number;
}

let numderDay: INumberOfDay = {
    day: 14
};

if (numderDay.day <= 11) {
    console.log('Your number ' + numderDay.day + ' is in the first decade of the month');
} else if (numderDay.day <= 22) {
    console.log('Your number ' + numderDay.day + ' is in the second decade of the month');
} else if (numderDay.day <= 31) {
    console.log('Your number ' + numderDay.day + ' is in the third decade of the month');
} else {
    console.log('You entered an incorrect number ' + numderDay.day + ' a month has a maximum of 31 days');
}