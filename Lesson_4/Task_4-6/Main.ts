interface IList {
    (text: string): void;
}


const list: IList = (text) => {
    document.write(`
                   <ul>
                     <li>${text}</li>
                     <li>${text}</li>
                     <li>${text}</li>
                   </ul>
                  `)
}

list('JavaScript');