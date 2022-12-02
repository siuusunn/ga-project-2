import { useState } from 'react';

function FilteredSearch({ filteredResults }) {
  if (filteredResults === null) {
    return '';
  }

  return (
    <>
      {filteredResults &&
        filteredResults
          .slice(0, 5)
          .map((result) => <li key={result}>{result}</li>)}
    </>
  );
}

export default FilteredSearch;
