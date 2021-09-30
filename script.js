const body = document.querySelector('body');
const firstPokemon = document.querySelector('.first-pokemon');
const secondPokemon = document.querySelector('.second-pokemon')
const thirdPokemon = document.querySelector('.third-pokemon');
const fourthPokemon = document.querySelector('.fourth-pokemon');
// const selectPokemon = document.querySelectorAll('.Pokemon');
const mainCards = document.querySelector('.container-cards');
const buttonBattle = document.querySelector('.button-style');
// document.querySelectorAll('.box-card')[0].classList.add('remove-card');
// document.querySelectorAll('.box-card')[1].classList.add('remove-card');
const namePokemon = document.querySelectorAll('h2');
const imgPokemon = document.querySelectorAll('img');
const valueHP = document.querySelectorAll('#HP');
const valueAttack = document.querySelectorAll('#ATK');
const valueDefense = document.querySelectorAll('#DFense')
const valueSpeed = document.querySelectorAll('#speed');
const selecAtributeHP = document.querySelector('#hp-selected');
const selecAtributeAtk = document.querySelector('#attack-selected');
const selectAtributeDefense = document.querySelector('#defense-selected');
const selectAtributeSpeed = document.querySelector('#speed-selected');
const pokemonType = document.querySelectorAll('.types');
const bannerResult = document.querySelector('.container-stats-names')
const sectionSelectedPokemonName = document.querySelector('#selected-pokemon');
const sectionSelectedAttributeName = document.querySelector('#selected-attribute');
const sectionsTitle = document.querySelector('h3.size');

function addSelectedClass(event) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}

firstPokemon.addEventListener('click', addSelectedClass);
secondPokemon.addEventListener('click', addSelectedClass);
thirdPokemon.addEventListener('click', addSelectedClass);
fourthPokemon.addEventListener('click', addSelectedClass);



const URL_Fetch_Api =  async (pokemon) => { 
  const returnConst = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((resposta) => resposta.json());
  return returnConst;
}; // retorna a promisse onde posso achar as img e os 'stats' onde posso achar HP e outros

// Mostra logo abaixo do header o nome do pokemon selecionado
const showSelectedPokemonName = (pokemonName) => {
  sectionSelectedPokemonName.innerText = `<< ${pokemonName} >>`;
}

const unShowSelectedPokemonName = () => {
  sectionSelectedPokemonName.innerText = '';
}

const showSelectedAtribute = (atributeName) => {
  sectionSelectedAttributeName.innerText = `<< ${atributeName} >>`;
}

const changeTitleText = () => {
  sectionsTitle.innerText = 'Escolha o seu Atributo ⬇️';
  document.querySelector('.display-none').classList.remove('display-none');
  
}

generateRandomNumber = () => {
  const arra = [];
  let result = Math.ceil(Math.random() * 200);
  while (arra.some((number) => number === result)) {
    result = Math.ceil(Math.random() * 200);
  }
  arra.push(result);
return arra;
} 

// function createCart(pokemonObj) {
//   const section = document.createElement('section');
//   section.classList = 'box-card remove-card';
//   mainCards.appendChild(section);
//   const divH2 = document.createElement('div')
//   section.appendChild(divH2);
//   const h2 = document.createElement('h2');
//   h2.className = 'size';
//   // h2.innerText = pokemonObj.forms[0].name;
//   divH2.appendChild(h2);
//   const divImg = document.createElement('div');
//   divImg.className = 'container-img';
// }

// createCart();
// api.types.type.name

async function generateRandomPokemons() {
  const api = await URL_Fetch_Api(generateRandomNumber());
  firstPokemon.src = api.sprites.front_default;
  firstPokemon.addEventListener('click',  () => {
    namePokemon[0].innerText = api.forms[0].name.toUpperCase()
    imgPokemon[4].src = api.sprites.other['official-artwork'].front_default;
    pokemonType[0].innerText = (api.types[0] && api.types[1]) ? `${api.types[0].type.name} / ${api.types[1].type.name}`.toLocaleUpperCase() : api.types[0].type.name.toLocaleUpperCase();
    valueHP[0].innerText = api.stats[0].base_stat;
    valueAttack[0].innerText = api.stats[1].base_stat;
    valueDefense[0].innerText = api.stats[2].base_stat;
    valueSpeed[0].innerText = api.stats[5].base_stat;
    showSelectedPokemonName(api.forms[0].name.toUpperCase());
    changeTitleText();
  });
  const api2 = await URL_Fetch_Api(generateRandomNumber());
  secondPokemon.src = api2.sprites.front_default;
  secondPokemon.addEventListener('click',  () => {
    namePokemon[0].innerText = api2.forms[0].name.toUpperCase()
    imgPokemon[4].src = api2.sprites.other['official-artwork'].front_default;
    pokemonType[0].innerText = (api2.types[0] && api2.types[1]) ? `${api2.types[0].type.name} / ${api2.types[1].type.name}`.toLocaleUpperCase() : api2.types[0].type.name.toLocaleUpperCase();
    valueHP[0].innerText = api2.stats[0].base_stat;
    valueAttack[0].innerText = api2.stats[1].base_stat;
    valueDefense[0].innerText = api2.stats[2].base_stat;
    valueSpeed[0].innerText = api2.stats[5].base_stat;
    showSelectedPokemonName(api2.forms[0].name.toUpperCase());
    changeTitleText();
  });
  const api3 = await URL_Fetch_Api(generateRandomNumber());
  thirdPokemon.src = api3.sprites.front_default;
  thirdPokemon.addEventListener('click',  () => {
    namePokemon[0].innerText = api3.forms[0].name.toUpperCase()
    imgPokemon[4].src = api3.sprites.other['official-artwork'].front_default;
    pokemonType[0].innerText = (api3.types[0] && api3.types[1]) ? `${api3.types[0].type.name} / ${api3.types[1].type.name}`.toLocaleUpperCase() : api3.types[0].type.name.toLocaleUpperCase();
    valueHP[0].innerText = api3.stats[0].base_stat;
    valueAttack[0].innerText = api3.stats[1].base_stat;
    valueDefense[0].innerText = api3.stats[2].base_stat;
    valueSpeed[0].innerText = api3.stats[5].base_stat;
    showSelectedPokemonName(api3.forms[0].name.toUpperCase());
    changeTitleText();
  });
  const api4 = await URL_Fetch_Api(generateRandomNumber());
  fourthPokemon.src = api4.sprites.front_default;
  fourthPokemon.addEventListener('click',  () => {
    namePokemon[0].innerText = api4.forms[0].name.toUpperCase()
    imgPokemon[4].src = api4.sprites.other['official-artwork'].front_default;
    pokemonType[0].innerText = (api4.types[0] && api4.types[1]) ? `${api4.types[0].type.name} / ${api4.types[1].type.name}`.toLocaleUpperCase() : api4.types[0].type.name.toLocaleUpperCase();
    valueHP[0].innerText = api4.stats[0].base_stat;
    valueAttack[0].innerText = api4.stats[1].base_stat;
    valueDefense[0].innerText = api4.stats[2].base_stat;
    valueSpeed[0].innerText = api4.stats[5].base_stat;
    showSelectedPokemonName(api4.forms[0].name.toUpperCase());
    changeTitleText();
  });
}
generateRandomPokemons();


async function randomCardMachine() {
  const pokemonMachine = await URL_Fetch_Api(generateRandomNumber());
  namePokemon[1].innerText = pokemonMachine.forms[0].name.toUpperCase();
  imgPokemon[5].src = pokemonMachine.sprites.other['official-artwork'].front_default;
  pokemonType[1].innerText = (pokemonMachine.types[0] && pokemonMachine.types[1]) ? `${pokemonMachine.types[0].type.name} / ${pokemonMachine.types[1].type.name}`.toLocaleUpperCase() : pokemonMachine.types[0].type.name.toLocaleUpperCase();
  valueHP[1].innerText = pokemonMachine.stats[0].base_stat;
  valueAttack[1].innerText = pokemonMachine.stats[1].base_stat;
  valueDefense[1].innerText = pokemonMachine.stats[2].base_stat;
  valueSpeed[1].innerText = pokemonMachine.stats[5].base_stat;
}


function resultBattle(player, machine) {
  bannerResult.innerHTML = '';
  const div = document.createElement('div');
  bannerResult.appendChild(div);
  const p = document.createElement('p');
  div.appendChild(p);

    if (player > machine) {
      p.className = 'result-win'
      p.innerHTML = 'Player Ganhou ✅'
  } else if (machine > player) {
    p.className = 'result-lose'
    p.innerHTML = 'Maquina Ganhou... ⛔️'
  }else {
    p.className = 'result-draw'
    p.innerHTML = 'Houve um empate!! 🥶'
  }

  const button = document.createElement('button');
  button.innerHTML = 'Restart Battle';
  button.className = 'button-style';

  const div2 = document.createElement('div');
  div2.className = 'reset-button';
  div2.appendChild(button);
  body.appendChild(div2);

  buttonBattle.disabled = true;

  button.addEventListener('click', () => {
    window.location.reload();
  });
}


async function startBattle() {
  unShowSelectedPokemonName();
  await randomCardMachine();
  const selected = document.querySelector('.selected');
  if (selected) {
    if (selecAtributeHP.checked) {
      resultBattle(valueHP[0].innerText, valueHP[1].innerText);
      const sectionCards = document.querySelectorAll('.remove-card');
      sectionCards.forEach(element => element.classList.remove('remove-card'));
      showSelectedAtribute('HP');
    }  else if (selecAtributeAtk.checked) {
      resultBattle(valueAttack[0].innerText, valueAttack[1].innerText);
      const sectionCards = document.querySelectorAll('.remove-card');
      sectionCards.forEach(element => element.classList.remove('remove-card'));
      showSelectedAtribute('ATTACK');
    } else if (selectAtributeDefense.checked) {
      resultBattle(valueDefense[0].innerText, valueDefense[1].innerText);
      const sectionCards = document.querySelectorAll('.remove-card');
      sectionCards.forEach(element => element.classList.remove('remove-card'));
      showSelectedAtribute('DEFENSE');
    } else if (selectAtributeSpeed.checked) {
      resultBattle(valueSpeed[0].innerText, valueSpeed[1].innerText);
      const sectionCards = document.querySelectorAll('.remove-card');
      sectionCards.forEach(element => element.classList.remove('remove-card'));
      showSelectedAtribute('SPEED');
    }  else {
      alert('selecione um atributo!');
    }
    
    buttonBattle.classList.add('display-none')
    
  } else {
    alert('Selecione o POKEMON!')
  }
}

buttonBattle.addEventListener('click', startBattle);
