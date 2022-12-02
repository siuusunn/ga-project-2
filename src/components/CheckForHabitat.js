function CheckForHabitat(pokeDex) {
  if (pokeDex.habitat) {
    return (
      <>
        <h4 className="title is-4">Habitat:</h4>
        <p className="is-capitalized">{pokeDex.habitat.name}</p>
      </>
    );
  } else {
    return (
      <>
        <h4 className="title is-4">Habitat:</h4>
        <p>Currently Unknown</p>
      </>
    );
  }
}
export default CheckForHabitat;
