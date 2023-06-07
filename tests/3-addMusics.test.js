const { addMusics, playlist } = require('../src/challenges');

let artist1 = 'Martinho da Vila';
let music1 = 'Disritmia'
let musicTime1 = 2.24;
let musicObj1 = { artist: artist1, music: music1, musicTime: musicTime1 }
let artist2 = 'João Sabiá';
let music2 = 'Carne de sol'
let musicTime2 = 4.58;
let musicObj2 = { artist: artist2, music: music2, musicTime: musicTime2 }
let musicObj3 = { artist: artist2, music: music1, musicTime: 3.54 }

describe('Função que adiciona músicas em uma playlist', () => {
  it('Verifica se o array playlist existe e está vazio', () => {
    expect(playlist).toEqual([]);
  });

  it('Retorne o array playlist com 1 objeto depois de chamar a função addMusics 1 vez', () => {
    addMusics(artist1, music1, musicTime1);
    expect(playlist).toEqual([ musicObj1 ]);
  });

  it('Retorne o array playlist com 2 objetos depois de chamar a função addMusics 2 vezes', () => {
    addMusics(artist2, music2, musicTime2);
    expect(playlist).toEqual([ musicObj1, musicObj2 ]);
  });

  it('Retorne o array playlist com 3 objetos depois de chamar a função addMusics 3 vezes', () => {
    addMusics(artist2, music1, 3.54);
    expect(playlist).toEqual([ musicObj1, musicObj2, musicObj3 ]);
  });
});
