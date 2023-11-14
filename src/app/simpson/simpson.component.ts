import { Component } from '@angular/core';
import { simpson_rule } from '../common/simpson_rule';
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

  Tsimp(x: number, b: number, n: number, numSegments: number, dof:number): number {
    const w = x/ numSegments;
    let sum = this.funcionGamma(x, n) + this.funcionGamma(b, n);

    for (let i = 1; i < numSegments; i++) {
      const z = x + i * w;
      if (i % 2 === 0) {
        sum += 2 * this.funcionGamma(z, n);
      } else {
        sum += 4 * this.funcionGamma(z, n);
      }
    }
    return (w/ 3) * sum;
  }
  funcionGamma(x: number, dof: number): number {
    /* const one= math.gamma((dof+1)/2);
    const two = (dof*Math.PI)^(1/2);
    const three = math.gamma(dof / 2);
    const four = (1+((x*x)/dof)^(-(dof+1)/2));
    const factor = (one/(two*three))*four; 
    return factor;*/
    const gamma=math.gamma(dof/2);
    const factor = gamma / (Math.sqrt(dof*Math.PI)*math.gamma((dof+1)/2));
    return factor*Math.pow(1+(x*x/dof),-((dof+1)/2));
  }

  gamma(x: number): number {
    /* const one= math.gamma((dof+1)/2);
    const two = (dof*Math.PI)^(1/2);
    const three = math.gamma(dof / 2);
    const four = (1+((x*x)/dof)^(-(dof+1)/2));
    const factor = (one/(two*three))*four; 
    return factor;*/
    const gamma=math.gamma(x);
    
    return gamma;
  }
}
