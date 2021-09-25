const firstPokemon = document.querySelector('.first-pokemon');
const secondPokemon = document.querySelector('.second-pokemon')
const thirdPokemon = document.querySelector('.third-pokemon');
const fourthPokemon = document.querySelector('.fourth-pokemon');


const URL_Fetch_Api = async (pokemon) => { 
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((resposta) => resposta.json())
};

const generateRandomNumber = () => Math.floor(Math.random() * 201);

async function generateRandomPokemons(pokemon) {
  const api = await URL_Fetch_Api(generateRandomNumber());
  firstPokemon.src = api.sprites.front_default;
  const api2 = await URL_Fetch_Api(generateRandomNumber());
  secondPokemon.src = api2.sprites.front_default;
  const api3 = await URL_Fetch_Api(generateRandomNumber());
  thirdPokemon.src = api3.sprites.front_default;
  const api4 = await URL_Fetch_Api(generateRandomNumber());
  fourthPokemon.src = api4.sprites.front_default;
}

generateRandomPokemons();
