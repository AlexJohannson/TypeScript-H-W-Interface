interface IWord {
    (text: string): void;
}


let word: IWord = (text) => {
    document.write(`
                 <ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                 </ul>
                `)
}
word('Typescript');