import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";
import React from "react";

const Book: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const book = getBook(parseInt(params.bookId!));

  if (book) {
    return (
      <div>
        <main style={{ padding: "1rem" }}>
          <h4>Name : {book?.name}</h4>
          <h4>price : {`${book?.amount}`} $ </h4>
          <button
            onClick={() => {
              deleteBook(book.number);
              navigate("/books" + location.search);
            }}
          >
            Delete
          </button>
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <h2>book not found</h2>
      </div>
    );
  }
};

export default Book;
