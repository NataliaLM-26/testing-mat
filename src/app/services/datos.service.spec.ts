import { TestBed } from '@angular/core/testing';

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
