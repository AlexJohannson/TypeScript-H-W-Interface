interface IListArray extends Array<number | string | boolean> {}
let array: IListArray = [1, 45, 'Javascript', true, false, -567, 'Node.js'];

interface IListLi {
    (arrayOfItem: IListArray): void;
}
let list: IListLi = (arrayOfItem) => {
    document.write(`<ul>`);
    for (const item of arrayOfItem) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

list(array);