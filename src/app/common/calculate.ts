export class Calculate {
    promx: number=0;
    promy: number=0;
    


    constructor(private data: any) {}
  
    sumX(): number {
      return this.data.proxy_size.reduce((acc: number, value: number) => acc + value, 0);
    }
  
    calculateYY(): number {
      return this.data.actual_added.reduce((acc: number, value: number) => acc + value * value, 0);
    }
  
    sumXY(): number {
      let sum = 0;
      for (let i = 0; i < this.data.proxy_size.length; i++) {
        sum += this.data.proxy_size[i] * this.data.actual_added[i];
      }
      return sum;
    }

    Meanx(data:number[]):number {
         var sum=0;
         
         for(var i=0; i<data.length; i++){
           sum+=data[i];
         }
         return this.promx= Number((sum/data.length));
       }

    Meany(data:number[]):number {
        var sum=0;
        
        for(var i=0; i<data.length; i++){
          sum+=data[i];
        }
        return this.promy= Number((sum/data.length));
      }
  
    calculateB1(): number {
      const n = this.data.proxy_size.length;
      const sumax = this.sumX();
      const sumay = this.calculateYY();
      const sumaxy = this.sumXY();
  
      /* return (n * sumXY - sumX * sumY) / (n * sumX - sumX * sumX); */
      return ((sumaxy)-(n(this.promx*this.promy)))/(sumax^2-(n*(this.promx^2)))

    }

    calculateB0(): number {
        const n = this.data.proxy_size.length;
        const sumX = this.sumX();
        const sumY = this.calculateYY();
        const sumXY = this.sumXY();
    
        return (sumY * this.sumX() - sumX * sumXY) / (n * sumX - sumX * sumX);
      }
  

    calculateYk(x: number): number {
      const B0 = this.calculateB0();
      const B1 = this.calculateB1();
      return B0 + B1 * x;
    }
  }
  