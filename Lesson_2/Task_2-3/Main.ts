interface IBooks {
    title: string;
    pageCount: number;
    genre: string;
    author: {
        name: string;
        age: number
    }[];
}

let book1: IBooks = {
    title: 'Title',
    pageCount: 36,
    genre: 'Genre',
    author: [
        {
            name: 'Name',
            age: 31
        }
    ]
};
console.log(book1);
console.log(book1.genre);
console.log(book1.author);



let book2: IBooks ={
    title: 'Frontend',
    pageCount: 792,
    genre: 'programming',
    author: [
        {
            name:   'Sergii',
            age: 37
        }
    ]
};
console.log(book2);
console.log(book2.title);
console.log(book2.author);




let book3: IBooks = {
    title: 'Java Script',
    pageCount: 653,
    genre: 'Frontend Developer',
    author: [
        {
            name: 'Brendan Eich',
            age: 63
        }
    ]
};
console.log(book3);
console.log(book3.pageCount);
console.log(book3.author);