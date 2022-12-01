import { useEffect, useState } from 'react';
import { getSinglePokemon, getBulbasaur } from './lib/api';
import CheckForTypes from './CheckForTypes';
import { useParams } from 'react-router-dom';

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

  console.log(pokemon.types);
  console.log(pokemon.types[0].type.name);

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{pokemon.name}</h2>
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
            <h4 className="title is-4">Type:</h4>
            <hr />
            <CheckForTypes {...pokemon} />
            <hr />
            <div className="column is-half">
              <h4 className="title is-4">Region:</h4>
              <hr />
              <p>region here</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PokedexIndividual;
