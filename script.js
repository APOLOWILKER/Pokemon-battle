
const getPokemon = document.querySelector('.first-pokemon');
const arrayPokemon = [firstPokemon, secondPokemon, thirdPokemon, fourPokemon]

const URL_Fetch_Api = async (pokemon) => { 
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((resposta) => resposta.json())
}

async function teste() {
  const api = await URL_Fetch_Api('blastoise');
  getPokemon.src = api.sprites.front_default;
  console.log(api);
  console.log(getPokemon)
}

teste();
