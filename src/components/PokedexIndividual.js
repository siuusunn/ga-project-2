import { useEffect, useState } from 'react';
import { getSinglePokemon } from './lib/api';
import CheckForTypes from './CheckForTypes';
import { useParams } from 'react-router-dom';
import PokeDexEntry from './PokeDexEntry';

function PokedexIndividual() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getSinglePokemon(id)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (pokemon === null) {
    return <p>Catching Pokemon...</p>;
  }
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered is-capitalized">
          {pokemon.name}
        </h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
            </figure>
          </div>
          <div className="column is-half">
            <h4 className="title is-3">Type:</h4>
            <hr />
            <CheckForTypes {...pokemon} />
            <hr />
            <PokeDexEntry id={id} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default PokedexIndividual;
