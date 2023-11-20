import { Component, OnInit } from '@angular/core';
import { Datos1Service } from '../services/datos1.service';
import { Datos2Service } from '../services/datos2.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  data1: number[] = [0];
  data2: number[] = [0];
  mean: number=0;
  
  constructor(private service1: Datos1Service, private service2: Datos2Service){}

  ngOnInit(): void {
      this.service1.getData().subscribe(data => {
        this.data1=data;
      })
      this.service2.getData().subscribe(data => {
        this.data2=data;
      });
  }

  /* getData(option: number): number[] {
    return option === 1 ? this.data1 : option === 2 ? this.data2 : [];
  } */

  getData(option: number): number[] {
    if (option === 1) {
      return this.data1;
    } else{
      return this.data2;
    }
  }
  

  calculateMean(data:number[]):number {
    var sum=0;
    for(var i=0; i<data.length; i++){
      sum+=data[i];
    }
    return this.mean= Number((sum/data.length).toFixed(2));
  }
}