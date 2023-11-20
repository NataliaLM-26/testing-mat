import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Datos2Service } from './datos2.service';

describe('Datos2Service', () => {
  let service: Datos2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Datos2Service]
    });
    service = TestBed.inject(Datos2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
