import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
      <nav className="navbar is-danger">
        <div className="container ">
          <div className="navbar-brand "></div>
          <Link to="/">
            <img
              src="https://iili.io/HfiJ2cv.md.png"
              className="image is-64x64"
            ></img>
          </Link>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/pokedex-all" className="navbar-item">
              Pokedex
            </Link>
            <SearchBar />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
