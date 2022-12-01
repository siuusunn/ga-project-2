import { Link } from 'react-router-dom';

const PokedexCard = ({ pokemon }) => {
  const baseLink = `/pokedex-all/${pokemon}`;

  const titleCase = (name) => {
    const first = name.toString().charAt(0).toUpperCase();
    const second = name.toString().slice(1);
    const result = first + second;
    return result;
  };

  return (
    <Link to={baseLink} key={pokemon}>
      <div className="card" key={pokemon}>
        <div className="card-content">
          <p className="title is-6">{titleCase(pokemon)}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokedexCard;
