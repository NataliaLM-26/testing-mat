import { TestBed } from '@angular/core/testing';

import { Test4Service } from './test4.service';

describe('Test4Service', () => {
  let service: Test4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Test4Service);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
