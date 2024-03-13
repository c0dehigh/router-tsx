import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import About from "./components/About.tsx";
import Books from "./components/Books.tsx";
import Book from "./components/Book.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main>
                  <h3>select the book</h3>
                </main>
              }
            />
            <Route path=":bookId" element={<Book />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>

          <Route path="*" element={
              <main style={{padding : "1rem"}}>
              <p>Book Not Found</p>
              </main>
          }/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
