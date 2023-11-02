import { Component } from '@angular/core';
/* import { simpson_rule } from '../common/simpson_rule'; */
import * as math from 'mathjs';
@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  
  reglaSimpson(x0: number, x1: number, num_seg: number, ERROR: number, f: (x: number) => number): number {
    const h = (x1 - x0) / num_seg;
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 1; i < num_seg; i += 2) {
      sum1 += f(x0 + i * h);
    }

    for (let i = 2; i < num_seg - 1; i += 2) {
      sum2 += f(x0 + i * h);
    }

    const p = (h / 3) * (f(x0) + 4 * sum1 + 2 * sum2 + f(x1));
    return p;
  }

  calculateTDistributionIntegral(a: number, b: number,x: number, nu: number, numSegments: number): number {
    const h = x / numSegments;
    let sum = this.densityFunction(x, nu) + this.densityFunction(b, nu);

    for (let i = 1; i < numSegments; i++) {
      const x = a + i * h;
      if (i % 2 === 0) {
        sum += 2 * this.densityFunction(x, nu);
      } else {
        sum += 4 * this.densityFunction(x, nu);
      }
    }

    return (h / 3) * sum;
  }
  densityFunction(x: number, nu: number): number {
    const gamma = math.gamma(nu / 2);
    const factor = gamma / (Math.sqrt(nu * Math.PI) * math.gamma((nu + 1) / 2));
    return factor * Math.pow(1 + (x * x / nu), -((nu + 1) / 2));
  }
}
