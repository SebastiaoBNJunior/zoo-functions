const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    expect(actual).toContain('Jefferson');
  });

  it('Retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected, 1);
  });

  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  });

  it('Retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    expect(actual).toBeGreaterThanOrEqual(5);
  });

  it('Retorna a disponibilidade dos elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = expect.not.arrayContaining(['Monday']);
    expect(actual).toEqual(expected);
  });

  it('Retorna undefined se o argumento for undefined', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });

  it('Passando por argumento um objeto vazio ({}) deve retornar a string -> Parâmetro inválido, é necessário uma string', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });

  it('Retorna null quando uma string inválida é passada como argumento', () => {
    const actual = handlerElephants('invalid');
    expect(actual).toBeNull();
  });
});
