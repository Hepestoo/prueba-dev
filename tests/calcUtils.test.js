const { calculate } = require('../src/utils/calcUtils');

test('suma correctamente (fallará)', () => expect(calculate(2,3,'+')).toBe(6));
test('resta correctamente', () => expect(calculate(7,4,'-')).toBe(3));
test('lanza error con operador inválido', () => expect(() => calculate(2,2,'x')).toThrow('Invalid operator'));
test('lanza error al dividir entre cero', () => expect(() => calculate(5,0,'/')).toThrow('Division by zero'));
