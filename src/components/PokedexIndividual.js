import { useEffect, useState } from 'react';
import { getSinglePokemon, getBulbasaur } from './lib/api';

function PokedexIndividual(pokeId) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getBulbasaur(pokeId)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.error(err));
  }, [pokeId]);

  if (pokemon === null) {
    return <p>The pokemon you are after, hasn&apos;t been found yet</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{pokemon.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
          </div>
        </div>
      </div>
    </section>
  );
}
export default PokedexIndividual;
