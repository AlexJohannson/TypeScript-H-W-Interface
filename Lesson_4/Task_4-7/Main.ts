interface ICounter {
    (text: string, counter: number): void;
}



const list1: ICounter = (text, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list1('Frontend', 5);