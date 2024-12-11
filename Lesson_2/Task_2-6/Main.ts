interface IVar {
    x: number;
    a: number;
    b: number;
}

let variebl: IVar = {
    x: 5,
    a: 1,
    b: -3
};


if(variebl.x === 0) {
    console.log('True');
} else {
    console.log('False');
}


if(variebl.x === variebl.a) {
    console.log('True');
} else {
    console.log('False');
}

if(variebl.x === variebl.b) {
    console.log('True');
} else {
    console.log('False');
}