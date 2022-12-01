import { useEffect, useState } from 'react';
import { getSinglePokemon, getPokedexEntry, getAllPokemon } from './lib/api';
import { useParams } from 'react-router-dom';

function PokeDexEntry() {
  const { id } = useParams();
  const [pokeDex, setPokeDex] = useState(null);
  useEffect(() => {
    getPokedexEntry(id)
      .then((res) => setPokeDex(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (pokeDex === null) {
    return <p>Loading PokeData</p>;
  }

  console.log(pokeDex);
  return (
    <>
      <div className="column">
        <h4 className="title is-4">Habitat:</h4>
        <p>{pokeDex.habitat.name}</p>
      </div>
      <hr />
      <div className="column">
        <h4 className="title is-4">PokeDex Entry:</h4>
      </div>
      <p>{pokeDex.flavor_text_entries[0].flavor_text}</p>
    </>
  );
}
export default PokeDexEntry;
