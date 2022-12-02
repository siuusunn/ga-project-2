import { useEffect, useState } from 'react';
import { getPokedexEntry } from './lib/api';
import { useParams } from 'react-router-dom';
import CheckForHabitat from './CheckForHabitat';
import CheckPokeDexDescription from './CheckPokeDexDescription';

function PokeDexEntry() {
  const { id } = useParams();
  const [pokeDex, setPokeDex] = useState(null);

  useEffect(() => {
    getPokedexEntry(id)
      .then((res) => setPokeDex(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (pokeDex === null) {
    return <p className="subtitle is-5">Loading PokéData</p>;
  }

  return (
    <>
      <CheckForHabitat {...pokeDex} />
      <hr />
      <h4 className="title is-3">PokéDex Entry:</h4>
      <CheckPokeDexDescription {...pokeDex} />
    </>
  );
}
export default PokeDexEntry;
