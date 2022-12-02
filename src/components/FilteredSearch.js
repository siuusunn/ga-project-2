import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function FilteredSearch({ filteredResults }) {
  const [displayResults, setDisplayResults] = useState({});
  const navigate = useNavigate();

  if (filteredResults === null) {
    return '';
  }

  const handleClick = (e) => {
    navigate(`/pokedex-all/${e.target.innerText}`);
    filteredResults = '';
  };

  return (
    <>
      {filteredResults &&
        filteredResults.slice(0, 5).map((result) => (
          <li key={result} onClick={handleClick} value={result}>
            {result}
          </li>
        ))}
    </>
  );
}

export default FilteredSearch;
