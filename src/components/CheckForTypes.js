const CheckForTypes = (pokemon) => {
  const pokeType = pokemon.types;
  console.log(pokeType);
  if (pokeType.length === 2) {
    let firstType = pokemon.types[0].type.name;
    firstType = firstType[0].toUpperCase() + firstType.substring(1);
    let secondType = pokemon.types[1].type.name;
    secondType = secondType[0].toUpperCase() + secondType.substring(1);
    return (
      <>
        <p>
          {firstType} - {secondType}
        </p>
      </>
    );
  } else {
    let firstType = pokemon.types[0].type.name;
    firstType = firstType[0].toUpperCase() + firstType.substring(1);
    return <p>{firstType}</p>;
  }
};

export default CheckForTypes;
