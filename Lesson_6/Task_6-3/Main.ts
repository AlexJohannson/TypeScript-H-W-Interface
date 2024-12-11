interface ILowerCase {
    a: string;
    b: string;
    c: string;
}

let lowerCase: ILowerCase = {
    a: 'HELLO WORLD',
    b: 'LOREM IPSUM',
    c: 'JAVASCRIPT IS COOL'
};

const aLowerCase: string = lowerCase.a.toLowerCase();
console.log(aLowerCase);

const bLowerCase: string = lowerCase.b.toLowerCase();
console.log(bLowerCase);

const cLowerCase: string = lowerCase.c.toLowerCase();
console.log(cLowerCase);