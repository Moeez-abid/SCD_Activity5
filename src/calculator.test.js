// calculator.test.js
const { add, subtract, multiply, divide, modulus } = require('./calculator');

describe('Calculator functions', () => {
  describe('add()', () => {
    test('adds two positive numbers', () => {
      expect(add(3, 5)).toBe(8);
    });

    test('adds positive and negative numbers', () => {
      expect(add(5, -2)).toBe(3);
    });

    test('adds two negative numbers', () => {
      expect(add(-4, -6)).toBe(-10);
    });
  });

  describe('subtract()', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts resulting in a negative number', () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  describe('multiply()', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 5)).toBe(15);
    });

    test('multiplies by zero', () => {
      expect(multiply(7, 0)).toBe(0);
    });

    test('multiplies negative and positive numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
    });
  });

  describe('divide()', () => {
    test('divides two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('divides resulting in a fraction', () => {
      expect(divide(3, 2)).toBe(1.5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });
  describe('modulus()', () => {
    test('returns the remainder of division', () => {
      expect(modulus(10, 3)).toBe(1);
    });

    test('returns 0 when divisible', () => {
      expect(modulus(9, 3)).toBe(0);
    });

    test('throws error when modulus by zero', () => {
      expect(() => modulus(10, 0)).toThrow('Cannot perform modulus by zero');
    });
  });
});
