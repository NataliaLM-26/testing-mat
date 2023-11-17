import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Datos1Service } from './datos1.service';

describe('ServicesService', () => {
  let service: Datos1Service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Datos1Service]
    });
    service = TestBed.inject(Datos1Service);
    httpMock = TestBed.inject(HttpTestingController);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request and return data on success', () => {
    const mockData = [1, 2, 3];

    service.getData().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service.api_proxyURL);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    httpMock.verify();
  });

  /* it('should handle errors appropriately', () => {
    const errorMessage = 'Error fetching data';

    service.getData().subscribe(
      data => fail('Expected an error, but received data'),
      error => {
        expect(error).toEqual(errorMessage);
      }
    );

    const req = httpMock.expectOne(service.api_proxyURL);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('error', { message: errorMessage }));

    httpMock.verify();
  }); */

  afterEach(() => {
    httpMock.verify();
  });

});