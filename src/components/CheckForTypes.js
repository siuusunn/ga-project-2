const CheckForTypes = (pokemon) => {
  const pokeType = pokemon.types;

  if (pokeType.length === 2) {
    return (
      <>
        <p className="is-capitalized subtitle is-4">
          {pokemon.types[0].type.name} - {pokemon.types[1].type.name}
        </p>
      </>
    );
  } else {
    return <p className="is-capitalized subtitle is-4">{pokemon.types[0].type.name}</p>;
  }
};

export default CheckForTypes;
