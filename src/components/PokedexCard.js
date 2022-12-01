import { Link } from 'react-router-dom';

const PokedexCard = ({ pokemon }) => {
  return (
    <Link to="/pokedex-individual" key={pokemon}>
      <div className="card" key={pokemon}>
        <div className="card-content">
          <p className="title is-6">{pokemon}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokedexCard;
