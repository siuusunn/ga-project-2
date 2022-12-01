import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './lib/api';

const PokedexCard = ({ pokemon }) => {
  const baseLink = `/pokedex-all/${pokemon}`;
  const [singlePokemonImage, setSinglePokemonImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${pokemon}`)
      .then((res) => {
        setSinglePokemonImage(
          res.data.sprites.other['official-artwork'].front_default
        );
      })
      .catch((err) => console.error(err.response));
  }, []);

  const titleCase = (name) => {
    const first = name.toString().charAt(0).toUpperCase();
    const second = name.toString().slice(1);
    const result = first + second;
    return result;
  };

  return (
    <Link to={baseLink} key={pokemon}>
      <div className="card" key={pokemon}>
        <div className="card-header">
          <p className="card-header-title is-6">{titleCase(pokemon)}</p>
        </div>
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={singlePokemonImage}></img>
          </figure>
        </div>
      </div>
    </Link>
  );
};

export default PokedexCard;
