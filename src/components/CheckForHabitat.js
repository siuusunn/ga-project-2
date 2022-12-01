function CheckForHabitat(pokeDex) {
  if (pokeDex.habitat) {
    let habitat = pokeDex.habitat.name;
    habitat = habitat[0].toUpperCase() + habitat.substring(1);
    return (
      <div className="column">
        <h4 className="title is-4">Habitat:</h4>
        <p>{habitat}</p>
      </div>
    );
  } else {
    return (
      <div className="column">
        <h4 className="title is-4">Habitat:</h4>
        <p>Currently Unkown</p>
      </div>
    );
  }
}
export default CheckForHabitat;
