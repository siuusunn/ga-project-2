import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllPokemon } from './lib/api';
import FilteredSearch from './FilteredSearch';

const initalSearch = {
  name: ''
};

function SearchBar() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState(initalSearch);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleChange = (e) => {
    const updatedSearch = { ...initalSearch, [e.target.name]: e.target.value };
    setSearchData(updatedSearch);
    setFilteredResults(
      searchNames.filter((name) => name.match(new RegExp(e.target.value, 'gi')))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pokedex-all/${searchData.name}`);
  };

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    getAllPokemon()
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => console.error(err.response));
  }, []);

  if (!pokemons) {
    return <p>Loading</p>;
  }

  const searchNames = pokemons.results.map((pokemon) => pokemon.name);

  return (
    <>
      <section className="section">
        <div className="field container is-grouped">
          <form autoComplete="off">
            <div className="autocomplete-input">
              <input
                className="input is-link is-small is-rounded"
                type="text"
                onChange={handleChange}
                placeholder="name"
                name="name"
                value={searchData.name}
              />
              <ul className="autocomplete-list has-background-white has-text-black"></ul>
            </div>
          </form>
          <div className="control">
            <input
              type="submit"
              className="button is-small is-rounded is-black"
              onClick={handleSubmit}
            />
          </div>
        </div>
        <ul>
          <FilteredSearch handleChange={handleChange} filteredResults={filteredResults} />
        </ul>
      </section>
    </>
  );
}
export default SearchBar;

// <section className="section">
//   <div className="field container is-grouped">
//     <input
//       className="input is-link is-small is-rounded"
//       type="text"
//       onChange={handleChange}
//       placeholder="name"
//       name="name"
//       value={searchData.name}
//     ></input>
//     <div className="control">
//       <p
//         className="button is-small is-rounded is-link"
//         onClick={handleSubmit}
//       >
//         Submit
//       </p>
//     </div>
//   </div>
// </section>;
