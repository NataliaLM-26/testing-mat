import { Component, OnInit } from '@angular/core';
import { Datos1Service } from '../services/datos1.service';
import { Datos2Service } from '../services/datos2.service';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit {
  dato1:number[]=[];
  dato2:number[]=[];
  
  constructor(private service1 :Datos1Service , private service2:Datos2Service, private mediaC :MediaComponent) {}

  ngOnInit(): void {
    this.service1.getData().subscribe(data=> {
      this.dato1=data;
    })
    this.service2.getData().subscribe(data=> {
      this.dato2=data;
    });
  }

  getData(option:number):number[]{
    if(option==1){
      return this.dato1;
    }else{
      if(option==2){
        return this.dato2;
      }else{
        return [];
      }
    }
  }
  
  desviacion(data:number[]){
      let mean=this.mediaC.calculateMean(data);
      let contador=0;
      for(let i=0;i<data.length;i++){
        contador+=(data[i]-mean)**2;
      }
      return Number(Math.sqrt(contador/(data.length-1)).toFixed(2));
  }

}
