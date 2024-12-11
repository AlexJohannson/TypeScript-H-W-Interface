interface IList {
    (text: string, counter: number): void;
}

let list: IList = (text, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list('JavaScript', 4);