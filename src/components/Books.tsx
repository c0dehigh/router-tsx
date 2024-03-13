import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import getBooks from "../data/data";
import { IBook } from "../data/data";
import "./Books.css";
const Books: React.FC = () => {
  const books: IBook[] = getBooks();
  const [search, setSearch] = useSearchParams();
  const location = useLocation();
  return (
    <div style={{ display: "flex" }}>
      <nav>
        <input
          value={search.get("filter") || ""}
          onChange={(event) => {
            const filter = event.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
          type="text"
          placeholder="search book"
        />
        {books
          .filter((book) => {
            const filter = search.get("filter");
            if (!filter) return true;
            const name = book.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((book) => (
            <NavLink
              style={{ display: "block", margin: "1rem" }}
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/books/${book.number}${location.search}`}
              key={book.number}
            >
              {book.name}{" "}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Books;
