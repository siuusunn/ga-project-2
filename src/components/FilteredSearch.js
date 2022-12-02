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
        filteredResults.slice(0, 5).map((result) => (
          <p key={result} onClick={handleClick} value={result}>
            {result}
          </p>
        ))}
    </>
  );
}

export default FilteredSearch;
