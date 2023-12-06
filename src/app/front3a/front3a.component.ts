import { Component } from '@angular/core';
import { Calculate } from '../common/calculate'; 
import { Test1Service } from '../services/test1.service';
import { Test2Service } from '../services/test2.service';
import { Test3Service } from '../services/test3.service';
import { Test4Service } from '../services/test4.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-front3a',
  templateUrl: './front3a.component.html',
  styleUrls: ['./front3a.component.css']
})
export class Front3aComponent {
  constructor (public test1: Test1Service,public test2: Test2Service, public test3:Test3Service, public test4:Test4Service){  }
  dataTest = {
    x: [],
    y: [],
  };
  lista1: number[] = [];
  lista2: number[] = [];
  selectedRouteNumber: number = 1;

  sumX = 0;
  sumY = 0;
  mediaX = 0
  mediaY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;
  n = 0;
  b1:number = 0;
  b0:number = 0;
  y:number = 0;
  r: number = 0;
  r2: number = 0;

  calculate = new Calculate();

  ngOnInit(option:number): void {
    this.fetchDataForRoute(this.selectedRouteNumber);
  }

  fetchDataForRoute(option: number): void {
    switch (option) {
      case 1:
        this.test1.getData().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_added;
          this.handleDataResponse(data);
        });
        break;
      case 2:
        this.test2.getData().subscribe((data) => {
          this.lista1 = data.proxy_size;
          this.lista2 = data.actual_develop;
          this.handleDataResponse(data);
        });
        break;
      case 3:
        this.test3.getData().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_added;
          this.handleDataResponse(data);
        });
        break;
      case 4:
        this.test4.getData().subscribe((data) => {
          this.lista1 = data.plan_added;
          this.lista2 = data.actual_develop;
          this.handleDataResponse(data);
        });
        break;
    }
  }
  handleDataResponse(data: any): void {
    this.sumX = this.calculate.sumX(this.lista1);
    this.sumY = this.calculate.sumX(this.lista2);
    this.mediaX = this.calculate.calculateMedia(this.lista1);
    this.mediaY = this.calculate.calculateMedia(this.lista2);
    this.sumXY = this.calculate.sumXY(this.lista1, this.lista2);
    this.sumXX = this.calculate.sumXX(this.lista1);
    this.sumYY = this.calculate.sumXX(this.lista2);
    this.n = this.lista1.length;
  }

  updateCalculations(option: number): void {
    const data = this.fetchDataForRoute(option);
    if (option === 1) {
      this.b0=this.calculateB0();
      this.b1=this.calculateB1();
      this.y=this.calculateY(386);
      this.r=this.calculateR();
      this.r2=this.calculateRCuadrada();
      console.log('cuenta 1');
    } if (option === 2) {
      this.b0=this.calculateB0();
      this.b1=this.calculateB1();
      this.y=this.calculateY(386);
      this.r=this.calculateR();
      this.r2=this.calculateRCuadrada();
      console.log('cuenta 2');
    } if (option === 3) {
      this.b0=this.calculateB0();
      this.b1=this.calculateB1();
      this.y=this.calculateY(386);
      this.r=this.calculateR();
      this.r2=this.calculateRCuadrada();
      console.log('cuenta 3');
    } if (option === 4) {
      this.b0=this.calculateB0();
      this.b1=this.calculateB1();
      this.y=this.calculateY(386);
      this.r=this.calculateR();
      this.r2=this.calculateRCuadrada();
      console.log('cuenta 4');
    }
  }
  
  calculateB1(): number {
    this.b1 = this.calculate.calculateB1(this.sumXY, this.sumX, this.sumY, this.sumXX, this.n);
    return this.b1;
  }

  calculateB0(): number {
    this.b0 = this.calculate.calculateB0(this.sumX, this.sumY, this.calculateB1(), this.n);
    return this.b0;
  }

  calculateY(x: number): number {
    this.y = this.calculate.calculateY(this.calculateB0(), this.calculateB1(), x);
    return this.y;
  }

  calculateR(): number {
    this.r =
      (this.n * this.sumXY - this.sumX * this.sumY) /
      Math.sqrt(
        (this.n * this.sumXX - Math.pow(this.sumX, 2)) *
          (this.n * this.sumYY - Math.pow(this.sumY, 2))
      );
    return this.r;
  }

  calculateRCuadrada(): number {
    let r = this.calculateR();
    this.r2=r * r;
    return this.r2;
  }
}
