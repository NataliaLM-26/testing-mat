import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  data: number[] = [];
  mean: number =0;
  
  constructor(private service: DatosService){}

  ngOnInit(): void {
      this.service.getData().subscribe(data => {
        this.data=data;
        this.calculateMean();
      });
  }

  calculateMean() {
    if (this.data.length > 0) {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      this.mean = sum / this.data.length;
      this.mean=parseFloat(this.mean.toFixed(2));
    } else {
      console.error('No hay datos para calcular la media.');
    }
  }
}

