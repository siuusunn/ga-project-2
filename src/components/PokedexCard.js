import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './lib/api';

const PokedexCard = ({ pokemon, type }) => {
  const baseLink = `/pokedex-all/${pokemon}`;
  const [singlePokemonImage, setSinglePokemonImage] = useState(null);
  const [pokemonType, setPokemonType] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${pokemon}`)
      .then((res) => {
        setSinglePokemonImage(
          res.data.sprites.other['official-artwork'].front_default
        );
        setPokemonType(res.data.types[0].type.name);
      })
      .catch((err) => console.error(err.response));
  }, []);

  return (
    <Link to={baseLink} key={pokemon}>
      <div className="card" key={pokemon} id={pokemonType}>
        <div className="card-content">
          <p className="title is-4 is-capitalized has-text-centered">
            {pokemon}
          </p>
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={singlePokemonImage} alt={pokemon}></img>
            </figure>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokedexCard;
