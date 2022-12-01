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

  return (
    <Link to={baseLink} key={pokemon}>
      <div className="card" key={pokemon}>
        <div className="card-content">
          <p className="title is-5 is-capitalized">{pokemon}</p>
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={singlePokemonImage}></img>
            </figure>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokedexCard;
