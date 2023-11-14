import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from '../media/media.component';
import { StddevComponent } from './stddev.component';
import { Datos1Service } from '../services/datos1.service';
import { Datos2Service } from '../services/datos2.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let service1: Datos1Service;
  let service2: Datos2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent],
      imports:[HttpClientTestingModule],
      providers: [MediaComponent]
    });
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    
    service1= TestBed.inject(Datos1Service);
    service2= TestBed.inject(Datos2Service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return stddev=572.03', ()=>{
    let espera=[160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(service1, 'getData').and.callFake(() => of(espera));
    fixture.detectChanges();
    let dataset=component.getData(1);
    expect(component.desviacion(dataset)).toBe(572.03);
  });

  it('Should return stddev=62.26', ()=>{
    let espera=[15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(service2, 'getData').and.callFake(()=>of(espera));
    fixture.detectChanges();
    let dataset=component.getData(2);
    expect(component.desviacion(dataset)).toBe(62.26);
  });
});
