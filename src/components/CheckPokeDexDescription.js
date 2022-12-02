function CheckPokeDexDescription(pokeDex) {
  const descriptions = pokeDex.flavor_text_entries;
  const foundEnglish = descriptions.find(
    (element) => element.language.name === 'en'
  );
  return <p>{foundEnglish.flavor_text}</p>;
}
export default CheckPokeDexDescription;
