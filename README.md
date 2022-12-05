# GA PROJECT 01 - ALICE LO

## Project Description

A group project where we utilize free API to fetch data and build a website using React. The Pokedex is built using The Poke API (https://pokeapi.co/). The website shows user all the pokemons to date with individual info of name, picture, type, habitat, and descriptions.

## Deployment Link

TBC

## Working Team & Timeframe

Working team:

- Alice (https://github.com/siuusunn)
- Jet (https://github.com/CodebyJet/)

Timeframe:
01/12/2022 - Project start
02/12/2022 - MVP done
05/12/2022 - Project finish

## Technologies Used

Front End:

- React
- Sass
- Bulma

Development Tools:

- Visual Code Studio

## Brief

Utilize free API found online to build a website using:

- Data fetching
- React.js

## Planning

Created a wireframe to get started with our basic components of the website, and listed out all the features and components needed for the MVP, divided the work between the team.

![Planning_Image](./ReadMeAssets/readme-planning.png)

## Code Process

The development is divided into six main components:

Jet:

- Home
- Individual Pokemon
- Search Bar

Alice:

- Navbar
- Pokedex
- Footer

### Navbar

The navbar is straight-forward and simple, I used Bulma to style it up and added a little animation to the Pokeball icon:

![Navbar_Example](./ReadMeAssets/Navbar-example.gif)

### Pokedex

The Pokedex component uses `getAllPokemon()` to fetch data from the API. As the endpoint to gert all the pokemons only gives back an array of objects comprised of names and urls only:

```"results": [
{
"name": "bulbasaur",
"url": "https://pokeapi.co/api/v2/pokemon/1/"
},
{
"name": "ivysaur",
"url": "https://pokeapi.co/api/v2/pokemon/2/"
},
{
"name": "venusaur",
"url": "https://pokeapi.co/api/v2/pokemon/3/"
}

```

I used the `map` function and pass the names to the PokedexCard component to generate a new endpoint to fetch data for all the individual cards:

```useEffect(() => {
axios
  .get(`${BASE_URL}/${pokemon}`)
  .then((res) => {
    setSinglePokemonImage(res.data.sprites.other['official-artwork'].front_default);
    setPokemonType(res.data.types[0].type.name);
  })
  .catch((err) => console.error(err.response));
}, []);
```

Using the above methods I managed to generate the cards to show all pokemons in the pokedex:

![Pokedex_Example](./ReadMeAssets/pokedex-example.png)

## Challenges

Alice:
The API does not provided one endpoint that gives access to all the data. For example, the `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154` link gives you a list of pokemon names and urls to their individual endpoints.

It is more diffucult to get the data and thus I had to write another `get` function in a sub-component to get the desired data. This is also a major block when I was trying to write a filter function for the `Pokedex.js` component.

## Wins

Alice:
As mentioned above, the way the API is set up makes it quite difficult to access desired data. A big win is difinitely passing the names of pokemons from `getAllPokemons()` to the `PokedexCard.js` component to generate individual endpoints to fetch the data for all the individual pokemons.

## Key Learnings/ Takeaways

Alice:

- Fully understand how useState works
- How to fetch data that is multiple layers deep and nested in different objects and arrays
- Bulma styling

## Bugs

- The results list of the search bar doesn't clear after the input field is cleared

## Future Improvements

Alice:

- Filter function for the Pokedex page
- Sort function for the Pokedex page
