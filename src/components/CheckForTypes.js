const CheckForTypes = (pokemon) => {
  const pokeType = pokemon.types;
  console.log(pokeType);
  if (pokeType.length === 2) {
    return (
      <>
        <p>
          {pokemon.types[0].type.name} - {pokemon.types[1].type.name}
        </p>
      </>
    );
  } else {
    return <p>{pokemon.types[0].type.name}</p>;
  }
};

export default CheckForTypes;
