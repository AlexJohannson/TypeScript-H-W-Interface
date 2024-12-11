interface IArray extends Array<string | number | boolean> {}


let arr: IArray = [1, 45, 'javascript', true, false, -567, 'node,js'];
list(arr);


function list(arrayOfItem) {
    document.write(`<ul>`);
    for (const item of arrayOfItem) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}