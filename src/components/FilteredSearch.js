import { useNavigate } from 'react-router-dom';

function FilteredSearch({ filteredResults, onClick }) {
  const navigate = useNavigate();

  if (filteredResults === null) {
    return '';
  }

  const handleClick = (e) => {
    navigate(`/pokedex-all/${e.target.innerText}`);
    onClick.setFilteredResults('');
    onClick.setSearchData({ name: '' });
  };

  return (
    <>
      {filteredResults &&
        filteredResults.slice(0, 4).map((result) => (
          <li
            className="results has-text-black is-capitalized"
            key={result}
            onClick={handleClick}
            value={result}
          >
            {result}
          </li>
        ))}
    </>
  );
}

export default FilteredSearch;
