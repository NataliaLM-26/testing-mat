import { Component } from '@angular/core';
import { simpson_rule } from '../common/simpson_rule';
import * as math from 'mathjs';
@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  x0:number=0;
  x1:number=0;
  segnum:number=0;
  fx: ((x: number) => number) | undefined;
  result:number=0;
  error:number=0;
  dof=0;
  x=0;

  
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
    const gamma=math.gamma(dof/2);
    const factor = gamma / (Math.sqrt(dof*Math.PI)*math.gamma((dof+1)/2));
    return factor*Math.pow(1+(x*x/dof),-((dof+1)/2));
  }

  gamma(x: number): number {
    const gamma=math.gamma(x);
    return gamma;
  }

  updateS(option:number):void{
    if (option === 1) {
      this.x0 = 0;
      this.x1 = 4;
      this.segnum = 4;
      this.error = 0.0001;
      this.fx = (x: number) => 2 * x;
      this.result =this.reglaSimpson(this.x0, this.x1, this.segnum, this.error, this.fx);
    } if (option === 2) {
      this.x0 = 0;
      this.x1 = 1;
      this.segnum = 4;
      this.error= 0.0001;
      this.fx = (x: number) => x ** 2;
      this.result =this.reglaSimpson(this.x0, this.x1, this.segnum, this.error, this.fx);
    } if (option === 3) {
      this.x0 = 1;
      this.x1 = 4;
      this.segnum= 6;
      this.error= 0.001;
      this.fx = (x: number) => 1 / x;
      this.result =this.reglaSimpson(this.x0, this.x1, this.segnum, this.error, this.fx);
    }
  }

  updateT(option:number):void{
    if (option === 1) {
      this.dof = 9;
      this.x = 1.1;
      this.segnum = 4;
      this.result = this.Tsimp(this.x,0,this.x,this.segnum,this.dof);
    } if (option === 2) {
      this.dof = 10;
      this.x = 1.1812;
      this.segnum = 10;
      this.result = this.Tsimp(this.x,0,this.x,this.segnum,this.dof);
    } if (option === 3) {
      this.dof = 30;
      this.x = 0.710;
      this.segnum = 10;
      this.result = this.Tsimp(this.x,0,this.x,this.segnum,this.dof);
    }
  }
}
