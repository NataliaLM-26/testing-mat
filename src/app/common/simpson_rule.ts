export class simpson_rule{

// Método para calcular la integral utilizando la regla de Simpson
    simpson(func: (x: number) => number, a: number, b: number, n: number): number {
    const h = (b - a) / n;
    let sum = func(a) + func(b);
      
        for (let i = 1; i < n; i++) {
            const x = a + i * h;
            sum += i % 2 === 0 ? 2 * func(x) : 4 * func(x);
            } return (h / 3) * sum;
        }
      
        calculate2x(x: number): number {
          return 2 * x;
        }
      
        calculatex2(x: number): number {
          return x * x;
        }
      
        calculate1_x(x: number): number {
          return 1 - x;
        }
      }