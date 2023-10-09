import { factorial } from './factorial';

describe('factorial test suite', () => {
    
    it('should return 0 if input is negative numbers', () => {
        const result = factorial(-1);
        expect(result).toBe(0);
    });

    it('should return 1 if input is 0', () => {
        const result = factorial(0);
        expect(result).toBe(1);
    });

    it('should return 2 if input is 2', () => {
        const result = factorial(2);
        expect(result).toBe(2);
    });
    
    it('should return 6 if input is 3', () => {
        const result = factorial(3);
        expect(result).toBe(6);
    });

    it('should return 24 if input is 4', () => {
        const result = factorial(4);
        expect(result).toBe(24);
    });

    it('should return 120 if input is 5', () => {
        const result = factorial(5);
        expect(result).toBe(120);
    });

    it('should return 0 if input > 15', () => {
        const result = factorial(16);
        expect(result).toBe(0);
    });
});

