import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DatosService } from './datos.service';

describe('ServicesService', () => {
  let service: DatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});