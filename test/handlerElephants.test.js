const computeData = require('../src/handlerElephants');
// const getElephants = require('../src/handlerElephants');


describe('6 - Implemente a função computeData para contabilizar a quantidade de elefantes', () => {
  it('Retorna a quantidade de elefantes', () => {
    const actual = computeData('count');
    const expected = 4;
    expect(actual).toEqual(expected);
    });  
    
  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = computeData('names');
    const expected = [ 'Ilana', 'Orval', 'Bea', 'Jefferson' ];
    expect(actual).toEqual(expected);
    });  

    it('Retorna a média de idade dos elefantes', () => {
      const actual = computeData('averageAge');
      const expected = 10.5;
      expect(actual).toEqual(expected);
      });  













});
