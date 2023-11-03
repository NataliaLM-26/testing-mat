import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent]
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
    let x0 = 0;
    let x1 = 4;
    let num_seg = 4;
    let ERROR = 0.0001;
    let f = (x: number) => 2 * x;
    let result = component.reglaSimpson(x0, x1, num_seg, ERROR, f);
    expect(result).toBeCloseTo(16.0, 4);
  });

  it('should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2', () => {
    let x0 = 0;
    let x1 = 1;
    let num_seg = 4;
    let ERROR = 0.0001;
    let f = (x: number) => x ** 2;
    let result = component.reglaSimpson(x0, x1, num_seg, ERROR, f);
    expect(result).toBeCloseTo(0.3333, 4);
  });

  it('should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
    let x0 = 1;
    let x1 = 4;
    let num_seg = 6;
    let ERROR = 0.001;
    let f = (x: number) => 1 / x;
    let result = component.reglaSimpson(x0, x1, num_seg, ERROR, f);
    expect(result).toBeCloseTo(1.387, 2);
  });

  ///////// distribución t
  it('should return p=0.35006 if dof=9 and 0 to x=1.1', () => {
    let dof = 9;
    let x = 1.1;
    let num_seg = 4;
    let result = component.Tsimp(x,0,x,num_seg,dof);
    expect(result).toBeCloseTo(0.35005,2);
    });

    //ejemplo de gamma
    it('should return 24',()=>{
      let x=5;
      let result=component.gamma(x);
      expect(result).toBe(24);
    });

    //ejemplo de gamma
    it('should return gamma 9/2',()=>{
      let x=9/2;
      let result=component.gamma(x);
      expect(result).toBeCloseTo(11.6317,2);
    });
    
  xit('should return p=0.36757 if dof=10 and 0 to x=1.1812', () => {
      let dof = 10;
      let x = 1.1812;
      let num_seg = 10;
      let w=x/num_seg;
      let result = component.Tsimp(x,0,x,dof,num_seg);
      expect(result).toBeCloseTo(0.36757,5);
  });

  it('should return p=0.49500 if dof=30 and 0 to x=.710', () => {
        let dof = 30;
        let x = 0.710;
        let num_seg = 10;
        let w=x/num_seg;
        let result = component.Tsimp(x,0,x,dof,num_seg);
        expect(result).toBeCloseTo(0.49590,3);
  });
});
