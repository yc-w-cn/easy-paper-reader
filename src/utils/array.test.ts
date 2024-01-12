import { ensureArray } from './array';

describe('ensureArray function', () => {
  it('should return an array if the input is already an array', () => {
    const input = [1, 2, 3];
    const result = ensureArray(input);
    expect(result).toEqual(input);
  });

  it('should wrap a truthy non-array value in a new array', () => {
    const input = 42;
    const result = ensureArray(input);
    expect(result).toEqual([input]);
  });

  it('should return an empty array for falsy or undefined input', () => {
    const input1 = null;
    const input2 = undefined;
    const result1 = ensureArray(input1);
    const result2 = ensureArray(input2);
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

  it('should handle boolean input correctly', () => {
    const input = true;
    const result = ensureArray(input);
    expect(result).toEqual([input]);
  });
});
