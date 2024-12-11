interface IText {
    (text: string): void;
}


let paragraph: IText = (text) => {
    document.write(`<p>${text}</p>`);
}
paragraph('Oleksandr');
paragraph('Okten');
paragraph('Ukraine');