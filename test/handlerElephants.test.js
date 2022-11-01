const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Função retorna undefined se não for informado parâmetro de entrada', () => {
    const result = handlerElephants();
    expect(result).toBe(undefined);
  });
  it('Função retorna mensagem de erro se parâmetro de entrada não for string', () => {
    const result = handlerElephants(3);
    expect(result).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Função retorna resultado de chave existente no objeto elephants', () => {
    const result = handlerElephants('popularity');
    expect(result).toBe(5);
  });
  it('Retorno da função com parâmetro count', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });
  it('Retorno da função com parâmetro names', () => {
    const result = handlerElephants('names').includes('Bea');
    expect(result).toBe(true);
  });
  it('Retorno da função com parâmetro averageAge', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5);
  });
  it('Retorno da função com parâmetro blable', () => {
    const result = handlerElephants('blable');
    expect(result).toBe(null);
  });
});
