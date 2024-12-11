interface IText {
    (text: string): void;
}




const paragraph: IText = (text) => {
    document.write(`<p>${text}</p>`)
}

paragraph('Oleksandr');
paragraph('Okten');
paragraph('Ukraine');