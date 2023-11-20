import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Test4Service } from './test4.service';

describe('Test4Service', () => {
  let service: Test4Service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Test4Service]
    });
    service = TestBed.inject(Test4Service);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request and return data on success', () => {
    const mockData = [1, 2, 3];

    service.getData().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service.api_url);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    httpMock.verify();
  });

  afterEach(() => {
    httpMock.verify();
  });
});
