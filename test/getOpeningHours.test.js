const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Função retorna se horário de funcionamento está ok', () => {
    const result = getOpeningHours('Sunday', '12:00-PM');
    expect(result).toBe('The zoo is open');
  });
  it('Função deve retornar array com objetos caso não seja passado argumento', () => {
    const result = getOpeningHours();
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(result).toEqual(obj);
  });
  it('Função deve retornar que zoo está fechado na segunda', () => {
    const result = getOpeningHours('Monday', '12:00-aM');
    expect(result).toBe('The zoo is closed');
  });
  it('Função deve retornar erro com hora > 12', () => {
    expect(() => getOpeningHours('Ble', '12:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Função deve retornar erro quando enviar período diferente de AM e PM', () => {
    expect(() => getOpeningHours('Thursday', '12:00-KM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Função deve retornar erro quando enviar hora sem ser número', () => {
    expect(() => getOpeningHours('Thursday', 'K9:00-PM')).toThrow('The hour should represent a number');
  });
  it('Função deve retornar erro quando enviar minutos sem ser número', () => {
    expect(() => getOpeningHours('Thursday', '09:k0-PM')).toThrow('The minutes should represent a number');
  });
  it('Função deve retornar erro quando hora for maior que 12', () => {
    expect(() => getOpeningHours('Thursday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Função deve retornar erro quando minutos for maior que 59', () => {
    expect(() => getOpeningHours('Thursday', '09:65-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
