import { factorial } from './factorial';

describe('factorial test suite', () => {
    it('should return 1 if input is 0', () => {
        const result = factorial(0);
        expect(result).toBe(1);
    });

    it('should calculate the factorial correctly for positive numbers', () => {
        const result = factorial(5);
        expect(result).toBe(120);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => factorial(-1)).toThrow();
    });
});
