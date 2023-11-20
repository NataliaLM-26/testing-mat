import { Component } from '@angular/core';
import { Calculate } from '../common/calculate'; 
import { Test1Service } from '../services/test1.service';
import { Test2Service } from '../services/test2.service';
import { Test3Service } from '../services/test3.service';
import { Test4Service } from '../services/test4.service';

@Component({
  selector: 'app-front3a',
  templateUrl: './front3a.component.html',
  styleUrls: ['./front3a.component.css']
})
export class Front3aComponent {
  constructor (private test1: Test1Service, private test2: Test2Service, private test3:Test3Service, private test4:Test4Service){  }

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

  calculate = new Calculate();

  ngOnInit(): void {
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
      default:
        console.error('Número de ruta no válido');
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

  /* updateData(routeNumber: number): void {
    this.fetchDataForRoute(routeNumber);
  } */

  updateCalculations(option: number): void {
    const data = this.fetchDataForRoute(option);
    if (option === 1) {
      this.b0=this.calculateB0();
      this.b1=this.calculateB1();
      this.y=this.calculateY(386);
    } if (option === 2) {
      this.b0=this.calculateB0();
      this.b1=this.calculateB1();
      this.y=this.calculateY(386);
    } if (option === 3) {
      this.b0=this.calculateB0();
      this.b1=this.calculateB1();
      this.y=this.calculateY(386);
    } if (option === 4) {
      this.b0=this.calculateB0();
      this.b1=this.calculateB1();
      this.y=this.calculateY(386);
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
}
