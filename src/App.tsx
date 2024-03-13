import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Library</h1>
      <nav style={{ borderBottom: "solid 1px", padding: "1rem" }}>
        <Link to="/books">Books</Link>

        <Link to="/about" style={{ marginLeft: "10px" }}>
          About
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
