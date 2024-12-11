interface IBook {
    title: string;
    pageCount: number;
    genre: string;
}


let book1: IBook = {
    title: 'Title',
    pageCount: 405,
    genre: 'Thriller'
};

let book2: IBook = {
    title: 'Title',
    pageCount: 276,
    genre: 'Novel'
};

let book3: IBook = {
    title: 'Title',
    pageCount: 115,
    genre: 'Fantasy'
};

console.log(book1);
console.log(book2);
console.log(book3);