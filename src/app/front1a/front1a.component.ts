import { Component, OnInit } from '@angular/core';
import { Datos1Service } from '../services/datos1.service';
import { Datos2Service } from '../services/datos2.service';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-front1a',
  templateUrl: './front1a.component.html',
  styleUrls: ['./front1a.component.css']
})
export class Front1aComponent implements OnInit{
  data1: number[] = [0];
  data2: number[] = [0];
  meanData1: number = 0;
  desviacionData1: number=0;
  meanData2: number = 0;
  desviacionData2: number=0;

  constructor(private service1: Datos1Service, private service2: Datos2Service) {}

  ngOnInit(): void {
    this.service1.getData().subscribe(data => {
      this.data1=data;
    })
    this.service2.getData().subscribe(data => {
      this.data2=data;
    });
}


  updateCalculations(option: number): void {
    const data = this.getData(option);
    if (option === 1) {
      this.meanData1 = this.calculateMean(data);
      this.desviacionData1 = this.desviacion(data);
    } else if (option === 2) {
      this.meanData2 = this.calculateMean(data);
      this.desviacionData2 = this.desviacion(data);
    }
  }

  getData(option: number): number[] {
    return option === 1 ? this.data1 : option === 2 ? this.data2 : [];
  }

  calculateMean(data: number[]): number {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return Number((sum / data.length).toFixed(2));
  }

  desviacion(data: number[]): number {
    const mean = this.calculateMean(data);
    let contador = 0;
    for (let i = 0; i < data.length; i++) {
      contador += Math.pow(data[i] - mean, 2);
    }
    return Number(Math.sqrt(contador / (data.length - 1)).toFixed(2));
  }
}
