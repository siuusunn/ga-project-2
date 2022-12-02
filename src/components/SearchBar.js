import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const initalSearch = {
  name: ''
};

function SearchBar() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState(initalSearch);

  const handleChange = (e) => {
    const updatedSearch = { ...initalSearch, [e.target.name]: e.target.value };
    setSearchData(updatedSearch);
    console.log(searchData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pokedex-all/${searchData.name}`);
  };

  return (
    <>
      <section className="section">
        <div className="field container is-grouped">
          <input
            className="input is-link is-small is-rounded"
            type="text"
            onChange={handleChange}
            placeholder="name..."
            name="name"
            value={searchData.name}
          ></input>
          <div className="control">
            <p
              className="button is-small is-rounded is-link"
              onClick={handleSubmit}
            >
              Submit
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default SearchBar;
