import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrelationComponent } from './correlation.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { Calculate } from '../common/calculate';
import { Test1Service } from '../services/test1.service';
import { Test2Service } from '../services/test2.service';
import { Test3Service } from '../services/test3.service';
import { Test4Service } from '../services/test4.service';
import { of } from 'rxjs';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let test1service: Test1Service;
  let test2service: Test2Service;
  let test3service: Test3Service;
  let test4service: Test4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      imports:[HttpClientTestingModule],
      providers: [Calculate , Test1Service, Test2Service, Test3Service, Test4Service]
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    test1service=TestBed.inject(Test1Service);
    test2service = TestBed.inject(Test2Service);
    test3service = TestBed.inject(Test3Service);
    test4service = TestBed.inject(Test4Service);
    fixture.detectChanges();
  });

  it('Should return r=0.9545 with the dataset Data_Test1', () => {
    const esperado = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_add: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
    spyOn(test1service, 'getData').and.returnValue(of(esperado));
    component.getData(1);
    component.calculos();
    expect(component.calculateR()).toBeCloseTo(0.9545, 4);
  });

  it('Should return r²=0.9111 with the dataset Data_Test1', () => {
    const esperado = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_add: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
    spyOn(test1service, 'getData').and.returnValue(of(esperado));
    component.getData(1);
    component.calculos();
    expect(component.calculateRCuadrada()).toBeCloseTo(0.9111, 4);
  });

  it('Should return r=0.9333 with the dataset Data_Test2', () => {
    const esperado = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };
    spyOn(test2service, 'getData').and.returnValue(of(esperado));
    component.getData(2);
    component.calculos();
    expect(component.calculateR()).toBeCloseTo(0.9333, 4);
  });

  it('Should return r²=0.8711 with the dataset Data_Test2', () => {
    const esperado = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };
    spyOn(test2service, 'getData').and.returnValue(of(esperado));
    component.getData(2);
    component.calculos();
    expect(component.calculateRCuadrada()).toBeCloseTo(0.8711, 4);
  });


  it('Should return r=0.9631 with the dataset Data_Test3', () => {
    const esperado = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
    spyOn(test3service, 'getData').and.returnValue(of(esperado));
    component.getData(3);
    component.calculos();
    expect(component.calculateR()).toBeCloseTo(0.9631, 4);
  });

  it('Should return r²=0.9276 with the dataset Data_Test3', () => {
    const esperado = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };
    spyOn(test3service, 'getData').and.returnValue(of(esperado));
    component.getData(3);
    component.calculos();
    expect(component.calculateRCuadrada()).toBeCloseTo(0.9276, 4);
  });


  it('Should return r=0.9480 with the dataset Data_Test4', () => {
    const esperado = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };
    spyOn(test4service, 'getData').and.returnValue(of(esperado));
    component.getData(4);
    component.calculos();
    expect(component.calculateR()).toBeCloseTo(0.948, 4);
  });

  it('Should return r²=0.8988 with the dataset Data_Test4', () => {
    const esperado = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };
    spyOn(test4service, 'getData').and.returnValue(of(esperado));
    component.getData(4);
    component.calculos();
    expect(component.calculateRCuadrada()).toBeCloseTo(0.8988, 4);
  });
});
