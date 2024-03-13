export interface IBook {
  name: string;
  number: number;
  amount: string;
  due: string;
}

let books: IBook[] = [
  {
    name: "Node js",
    number: 1,
    amount: "100,000",
    due: "1990/2/1",
  },

  {
    name: "React js",
    number: 2,
    amount: "200,000",
    due: "1991/2/1",
  },
  {
    name: "type script",
    number: 3,
    amount: "500,000",
    due: "1994/2/1",
  },
];

const getBooks = () => {
  return books;
};

export const getBook = (number: number) => {
  return books.find((book) => book.number === number);
};

export const deleteBook = (number: number) => {
  books = books.filter((book) => book.number !== number);
};

export default getBooks;
