import { Component } from '@angular/core';
import { simpson_rule } from '../common/simpson_rule';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  /* private calcular: simpson_rule */
   constructor() {
    const simpsonRule = new simpson_rule();
    
    // Ejemplo de uso
    const integralResult = simpsonRule.simpson(x => x * x, 0, 1, 100);
    const result2x = simpsonRule.calculate2x(3);
    const resultx2 = simpsonRule.calculatex2(4);
    const result1_x = simpsonRule.calculate1_x(2);
    
    console.log('Integral Result:', integralResult);
    console.log('Result 2x:', result2x);
    console.log('Result x^2:', resultx2);
    console.log('Result 1 - x:', result1_x);
   }
  
   
}
