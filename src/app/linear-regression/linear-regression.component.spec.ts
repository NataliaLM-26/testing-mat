import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { LinearRegressionComponent } from './linear-regression.component';
import { Calculate } from '../common/calculate';
import { Test1Service } from '../services/test1.service';
import { Test2Service } from '../services/test2.service';
import { Test3Service } from '../services/test3.service';
import { Test4Service } from '../services/test4.service';
import { of } from 'rxjs';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let test1service: Test1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent],
      imports:[HttpClientTestingModule],
      providers: [{ provide: Calculate }, Test1Service, Test2Service, Test3Service, Test4Service]
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    test1service=TestBed.inject(Test1Service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* it('Should return B0=-22.55 with Data_Test1', () => {
    const espera = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
    spyOn(test1service, 'getData').and.returnValue(of(espera));
    fixture.detectChanges();
    component.calculateValues();
    expect(component.B0).toBeCloseTo(-22.55, 2);
  }); */

  /* it('Should return B1=1.7279 with the dataset Data_Test1', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    spyOn(test1service, 'getData').and.returnValue(of(testData)); // Simula la respuesta del servicio

    component.calculateValues(); // Realiza el cálculo

    expect(component.B1).toBeCloseTo(1.7279, 4); // Asegura que B1 es aproximadamente igual a 1.7279
  }); */

  /* it('Should return yk=644.429 with the dataset Data_Test1 if x=386', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    spyOn(test1service, 'getData').and.returnValue(of(testData)); // Simula la respuesta del servicio

    component.calculateValues(); // Realiza el cálculo

    const x = 386;
    expect(component.yk).toBeCloseTo(644.429, 3); // Asegura que yk es aproximadamente igual a 644.429 para x=386
  }); */
});
