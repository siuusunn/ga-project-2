function CheckPokeDexDescription(pokeDex) {
  const descriptions = pokeDex.flavor_text_entries;
  console.log(descriptions);
  const foundEnglish = descriptions.find(
    (element) => element.language.name === 'en'
  );
  console.log(foundEnglish);
  return <p>{foundEnglish.flavor_text}</p>;
}
export default CheckPokeDexDescription;
