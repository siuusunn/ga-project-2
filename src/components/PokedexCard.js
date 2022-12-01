import { Link } from 'react-router-dom';

const PokedexCard = ({ pokemon }) => {
  const baseLink = `/pokedex-all/${pokemon}`;

  return (
    <Link to={baseLink} key={pokemon}>
      <div className="card" key={pokemon}>
        <div className="card-content">
          <p className="title is-6">{pokemon}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokedexCard;

// const titleCasePokemons = pokemons.results.map((pokemon) => {
//   const first = pokemon.name.toString().charAt(0).toUpperCase();
//   const second = pokemon.name.toString().slice(1);
//   return first + second;
// });
