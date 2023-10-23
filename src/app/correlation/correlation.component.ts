import { Component } from '@angular/core';
import { Calculate } from '../common/calculate';
import { Test1Service } from '../services/test1.service';
import { Test2Service } from '../services/test2.service';
import { Test3Service } from '../services/test3.service';
import { Test4Service } from '../services/test4.service';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent {
  constructor (private test1: Test1Service, private test2: Test2Service, private test3:Test3Service, private test4:Test4Service){  }
  dataTest = {
    x: [],
    y: [],
  };
  sumaXY = 0;
  sumaX = 0;
  sumaY = 0;
  sumaXCuadrada = 0;
  sumaYCuadrada = 0;
  n = 0;

  calculate = new Calculate();
  calculos() {
    if (
      this.dataTest.x.length == this.dataTest.y.length &&
      this.dataTest.x.length != 0
    ) {
      this.n = this.dataTest.x.length;
      this.sumaX = this.calculate.sumX(this.dataTest.x);
      this.sumaY = this.calculate.sumX(this.dataTest.y);
      this.sumaXY = this.calculate.sumXY(this.dataTest.x, this.dataTest.y);
      this.sumaXCuadrada = this.calculate.sumXX(this.dataTest.x);
      this.sumaYCuadrada = this.calculate.sumXX(this.dataTest.y);
    }
  }

  getData(option: number) {
    switch (option) {
      case 1:
        this.test1.getData().subscribe((data) => {
          this.dataTest.x = data.proxy_size;
          this.dataTest.y = data.actual_add;
        });
        break;
      case 2:
        this.test2.getData().subscribe((data) => {
          this.dataTest.x = data.proxy_size;
          this.dataTest.y = data.actual_develop;
        });
        break;
      case 3:
        this.test3.getData().subscribe((data) => {
          this.dataTest.x = data.plan_added;
          this.dataTest.y = data.actual_added;
        });
        break;
      case 4:
        this.test4.getData().subscribe((data) => {
          this.dataTest.x = data.plan_added;
          this.dataTest.y = data.actual_develop;
        });
        break;
    }
  }

  calculateR(): number {
    let r =
      (this.n * this.sumaXY - this.sumaX * this.sumaY) /
      Math.sqrt(
        (this.n * this.sumaXCuadrada - Math.pow(this.sumaX, 2)) *
          (this.n * this.sumaYCuadrada - Math.pow(this.sumaY, 2))
      );
    return r;
  }

  calculateRCuadrada(): number {
    let r = this.calculateR();
    return r * r;
  }

}
