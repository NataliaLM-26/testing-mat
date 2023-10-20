import { Component } from '@angular/core';
import { Calculate } from '../common/calculate'; 
import { Test1Service } from '../services/test1.service';
import { Test2Service } from '../services/test2.service';
import { Test3Service } from '../services/test3.service';
import { Test4Service } from '../services/test4.service';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent {
  data:any;
  B0:number=0;
  B1:number=0;
  yk:number=0;

  constructor (private test1: Test1Service){
    this.test1.getData().subscribe((response) => {
      this.data=response;
    });
  }

  calculateValues() {
    if (this.data) {
      const calculator = new Calculate(this.data);
      const B0 = calculator.calculateB0();
      const B1 = calculator.calculateB1();
      const x = 386;
      const yk = calculator.calculateYk(x);

      console.log(`B0=${B0.toFixed(4)}`);
      console.log(`B1=${B1.toFixed(4)}`);
      console.log(`yk=${yk.toFixed(3)}`);
      console.info;
    }
    }

  
}
