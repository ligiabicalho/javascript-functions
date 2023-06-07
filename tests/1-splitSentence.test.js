const { splitSentence } = require('../src/challenges');

describe('1 - Crie uma função que divida uma frase', () => {
  it('Retorne o valor [\'go\', \'Dev\'] se a função receber a string \'go Dev\'', () => {
    expect(splitSentence('go Dev')).toEqual(['go', 'Dev']);
  });

  it('Retorne o valor [\'simbora\', \'codar\', \'muito\']. se a função receber a string \'simbora codar muito\'', () => {
    expect(splitSentence('simbora codar muito')).toEqual(['simbora', 'codar', 'muito']);
  });

  it('Retorne o valor [\'codar\'] se a função receber a string \'codar\'', () => {
    expect(splitSentence('codar')).toEqual(['codar']);
  });
});
