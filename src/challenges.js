const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');
const { sandwiches } = require('./mcDonalds');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
function splitSentence(phrase) {
  return phrase.split(' ');
}
// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = []
function addMusics(artist, music, musicTime) {
  playlist.push({"artist": artist, "music": music, "musicTime": musicTime})
  return playlist
}

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
function moreExpensive(data, category) { 
  let itemMoreExpensive = data[category][0]
  for (let i = 0; i < data[category].length; i += 1){
    if(itemMoreExpensive.price < data[category][i].price){
      itemMoreExpensive = data[category][i]
    }
  }
  return `O produto mais caro é: ${itemMoreExpensive.name}, que custa: R$${itemMoreExpensive.price.toFixed(2)}.`
}

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
function checkItem(data, category, item) {
  for (let i = 0; i < data[category].length; i += 1){
    if(data[category][i].name == item){
      return true
    }
  } 
  return false
}

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
function addNewItem(data, category, item, price, ingredients, calories){
  if(checkItem(data, category, item)){
    return `O produto: "${item}" já existe!`
  }
  new_item = {item, price, ingredients, calories}
  data[category].push(new_item)
  return new_item
}

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
function counterGender(guestsDatabase){
  let male = 0
  let female = 0
  for (let i = 0; i < guestsDatabase.guests.length; i += 1){
    if(guestsDatabase.guests[i].gender === 'male'){
      male += 1;
    } else {
      female += 1;
    }
  }
  return { male, female }
}
// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
function filterState(guestsDatabase, state){
  elements = []
  for(let i = 0; i < guestsDatabase.guests.length; i += 1){
    if(guestsDatabase.guests[i].address.state === state){
      elements.push(guestsDatabase.guests[i])
    }
  }
  return elements
}
// Requisito 9 - Crie uma função que altera a propriedade `picture`
function changePicture(guestsDatabase, link){
  for(let i = 0; i < guestsDatabase.guests.length; i += 1){
    guestsDatabase.guests[i].picture = link;
  }
  return guestsDatabase.guests
}
// Requisito 10 - Crie um função que gera um relatório

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => {}),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => {}),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => {}),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => {}),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => {}),
  filterState: typeof filterState === 'function' ? filterState : (() => {}),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => {}),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => {}),
};
