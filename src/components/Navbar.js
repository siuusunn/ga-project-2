import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
      <nav className="navbar is-danger">
        <div className="container">
          <div className="navbar-brand ">
            <Link to="/" className="navbar-item">
              <img
                src="https://iili.io/HfiJ2cv.md.png"
                className="image is-64x64 logo"
              ></img>
            </Link>
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/pokedex-all" className="navbar-item">
                Pokedex
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <SearchBar />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
