const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const CLOSED_MESSAGE = 'The zoo is closed';
  const OPEN_MESSAGE = 'The zoo is open';
  const INVALID_DAY_MESSAGE = 'The day must be valid. Example: Monday';
  const INVALID_ABBREVIATION_MESSAGE = 'The abbreviation must be \'AM\' or \'PM\'';
  const INVALID_HOUR_MESSAGE = 'The hour should represent a number';
  const INVALID_MINUTES_MESSAGE = 'The minutes should represent a number';
  const HOUR_RANGE_MESSAGE = 'The hour must be between 0 and 12';
  const MINUTES_RANGE_MESSAGE = 'The minutes must be between 0 and 59';

  it('Se não for passado nenhum parâmetro da função, deve retornar toda a lista de horários', () => {
    const actual = getOpeningHours('', '');
    expect(actual).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Para os argumentos Monday e 09:00-AM deve retornar a string -> The zoo is closed (Já que o Zoo está sempre fechado na segunda)', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    expect(actual).toBe(CLOSED_MESSAGE);
  });

  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string -> The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    expect(actual).toBe(OPEN_MESSAGE);
  });

  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string -> The zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    expect(actual).toBe(CLOSED_MESSAGE);
  });

  it('Para os argumentos Thu e 09:00-AM deve retornar a string -> The day must be valid. Example: Monday', () => {
    const actual = getOpeningHours('Thu', '09:00-AM');
    expect(actual).toBe(INVALID_DAY_MESSAGE);
  });

  it('Para os argumentos Friday e 09:00-ZM deve retornar a string -> The abbreviation must be \'AM\' or \'PM\'', () => {
    const actual = getOpeningHours('Friday', '09:00-ZM');
    expect(actual).toBe(INVALID_ABBREVIATION_MESSAGE);
  });

  it('Para os argumentos Saturday e C9:00-AM deve retornar a string -> The hour should represent a number', () => {
    const actual = getOpeningHours('Saturday', 'C9:00-AM');
    expect(actual).toBe(INVALID_HOUR_MESSAGE);
  });

  it('Para os argumentos Sunday e 09:c0-AM deve retornar a string -> The minutes should represent a number', () => {
    const actual = getOpeningHours('Sunday', '09:c0-AM');
    expect(actual).toBe(INVALID_MINUTES_MESSAGE);
  });

  it('Para os argumentos Monday e 13:00-AM deve retornar a string -> The hour must be between 0 and 12', () => {
    const actual = getOpeningHours('Monday', '13:00-AM');
    expect(actual).toBe(HOUR_RANGE_MESSAGE);
  });

  it('Para os argumentos Tuesday e 09:60-AM deve retornar a string -> The minutes must be between 0 and 59', () => {
    const actual = getOpeningHours('Tuesday', '09:60-AM');
    expect(actual).toBe(MINUTES_RANGE_MESSAGE);
  });
});
