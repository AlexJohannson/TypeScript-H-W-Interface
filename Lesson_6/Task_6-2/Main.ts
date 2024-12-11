interface IUpperCase {
    a: string;
    b: string;
    c: string;
}

let upperCase: IUpperCase = {
    a: 'hello world',
    b: 'lorem ipsum',
    c: 'javascript is cool'
};

const aUpperCase: string = upperCase.a.toUpperCase();
console.log(aUpperCase);


const bUpperCase: string = upperCase.b.toUpperCase();
console.log(bUpperCase);


const cUpperCase: string = upperCase.c.toUpperCase()
console.log(cUpperCase);