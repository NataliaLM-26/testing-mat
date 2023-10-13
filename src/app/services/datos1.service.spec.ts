import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Datos1Service } from './datos1.service';

describe('ServicesService', () => {
  let service: Datos1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datos1Service);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});