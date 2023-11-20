import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Front3aComponent } from './front3a.component';
import { Calculate } from '../common/calculate';
import { Test1Service } from '../services/test1.service';
import { Test2Service } from '../services/test2.service';
import { Test3Service } from '../services/test3.service';
import { Test4Service } from '../services/test4.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('Front3aComponent', () => {
  let component: Front3aComponent;
  let fixture: ComponentFixture<Front3aComponent>;
  let calculateSpy: jasmine.SpyObj<Calculate>;
  let test1ServiceSpy: jasmine.SpyObj<Test1Service>;
  let test2ServiceSpy: jasmine.SpyObj<Test2Service>;
  let test3ServiceSpy: jasmine.SpyObj<Test3Service>;
  let test4ServiceSpy: jasmine.SpyObj<Test4Service>;
  let test1service: Test1Service;
  let test2service: Test2Service;
  let test3service: Test3Service;
  let test4service: Test4Service;

  beforeEach(() => {
    calculateSpy = jasmine.createSpyObj('Calculate', [
      'sumX',
      'calculateMedia',
      'sumXY',
      'sumXX',
      'sumYY',
      'calculateB1',
      'calculateB0',
      'calculateY',
      'calculateR',
      'calculateRCuadrada',
    ]);
    test1ServiceSpy = jasmine.createSpyObj('Test1Service', ['getData']);
    test2ServiceSpy = jasmine.createSpyObj('Test2Service', ['getData']);
    test3ServiceSpy = jasmine.createSpyObj('Test3Service', ['getData']);
    test4ServiceSpy = jasmine.createSpyObj('Test4Service', ['getData']);
    TestBed.configureTestingModule({
      declarations: [Front3aComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Calculate, useValue: calculateSpy },
        { provide: Test1Service, useValue: test1ServiceSpy },
        { provide: Test2Service, useValue: test2ServiceSpy },
        { provide: Test3Service, useValue: test3ServiceSpy },
        { provide: Test4Service, useValue: test4ServiceSpy },
        Calculate,Test1Service, Test2Service, Test3Service, Test4Service
      ],
    });
    fixture = TestBed.createComponent(Front3aComponent);
    component = fixture.componentInstance;
    test1service=TestBed.inject(Test1Service);
    test2service = TestBed.inject(Test2Service);
    test3service = TestBed.inject(Test3Service);
    test4service = TestBed.inject(Test4Service);
    fixture.detectChanges();
  });

  xit('should fetch data for route 1 and handle response', () => {
    const testData = {
      proxy_size: [ 130,650,99,150,128,302,95,945,368,961],
      actual_added: [186,699,132,272,291,331,199,1890,788,1601],
    };
    test1ServiceSpy.getData.and.returnValue(of(testData));
    component.fetchDataForRoute(1);
    expect(test1ServiceSpy.getData).toHaveBeenCalledOnceWith();
    expect(component.lista1).toEqual(testData.proxy_size);
    expect(component.lista2).toEqual(testData.actual_added);
    /* expect(calculateSpy.sumX).toHaveBeenCalledOnceWith(component.lista1); */
  });

  xit('should fetch data for route 2 and handle response', () => {
    const testData = {
      proxy_size: [ 130,650,99,150,128,302,95,945,368,961],
      actual_develop: [15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2],
    };
    test2ServiceSpy.getData.and.returnValue(of(testData));
    component.fetchDataForRoute(2);
    expect(test2ServiceSpy.getData).toHaveBeenCalledOnceWith();
    expect(component.lista1).toEqual(testData.proxy_size);
    expect(component.lista2).toEqual(testData.actual_develop);
    /* expect(calculateSpy.sumX).toHaveBeenCalledOnceWith(component.lista1); */
  });

  xit('should fetch data for route 3 and handle response', () => {
    const testData = {
      plan_added:[163,765,141,166,137,355,136,1206,433,1130],
      actual_added: [186,699,132,272,291,331,199,1890,788,1601],
    };
    test3ServiceSpy.getData.and.returnValue(of(testData));
    component.fetchDataForRoute(3);
    expect(test3ServiceSpy.getData).toHaveBeenCalledOnceWith();
    expect(component.lista1).toEqual(testData.plan_added);
    expect(component.lista2).toEqual(testData.actual_added);
    /* expect(calculateSpy.sumX).toHaveBeenCalledOnceWith(component.lista1); */
  });

  xit('should fetch data for route 4 and handle response', () => {
    const testData = {
      plan_added:[163,765,141,166,137,355,136,1206,433,1130], 
      actual_develop:[15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2],     
    };
    test4ServiceSpy.getData.and.returnValue(of(testData));
    component.fetchDataForRoute(4);
    expect(test4ServiceSpy.getData).toHaveBeenCalledOnceWith();
    expect(component.lista1).toEqual(testData.plan_added);
    expect(component.lista2).toEqual(testData.actual_develop);
    /* expect(calculateSpy.sumX).toHaveBeenCalledOnceWith(component.lista1); */
  });

  it('should update calculations on button1 click', () => {
    spyOn(component, 'updateCalculations').and.callThrough();
    const button1 = fixture.debugElement.query(By.css('button')).nativeElement;
    button1.click();
    expect(component.updateCalculations).toHaveBeenCalledWith(1);
  });

  it('should update calculations on button2 click', () => {
    spyOn(component, 'updateCalculations').and.callThrough();
    const button2 = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    button2.click();
    expect(component.updateCalculations).toHaveBeenCalledWith(2);
  });

  it('should update calculations on button3 click', () => {
    spyOn(component, 'updateCalculations').and.callThrough();
    const button3 = fixture.debugElement.queryAll(By.css('button'))[2].nativeElement;
    button3.click();
    expect(component.updateCalculations).toHaveBeenCalledWith(3);
  });

  it('should update calculations on button4 click', () => {
    spyOn(component, 'updateCalculations').and.callThrough();
    const button4 = fixture.debugElement.queryAll(By.css('button'))[3].nativeElement;
    button4.click();
    expect(component.updateCalculations).toHaveBeenCalledWith(4);
  });

  const test1Data = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
  };

  const test2Data = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_develop: [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ],
  };

  const test3Data = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
  };

  const test4Data = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_develop: [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ],
  };

  xit('should return B0 = -22.5525 with test1 json', () => {
    spyOn(test1service, 'getData').and.returnValue(of(test1Data));
    component.fetchDataForRoute(1);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-22.5525, 4);
  });

  xit('should return y = 644.429 if x = 386 with test1 json', () => {
    spyOn(test1service, 'getData').and.returnValue(of(test1Data));
    component.fetchDataForRoute(1);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(644.429, 3);
  });

  xit('should return B1 = 0.1681 with test2 JSON', () => {
    spyOn(test2service, 'getData').and.returnValue(of(test2Data));
    component.ngOnInit(2);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(0.1681, 4);
  });

  xit('should return B0 = -4.039 with test2 JSON', () => {
    spyOn(test2service, 'getData').and.returnValue(of(test2Data));
    component.ngOnInit(2);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-4.039, 3);
  });

  xit('should return y = 60.858 if x = 386 with2 test JSON', () => {
    spyOn(test2service, 'getData').and.returnValue(of(test2Data));
    component.ngOnInit(2);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(60.858, 3);
  });

  xit('should return B1 = 1.43097 with test3 JSON', () => {
    spyOn(test3service, 'getData').and.returnValue(of(test3Data));
    component.ngOnInit(3);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(1.43097, 5);
  });

  xit('should return B0 = -23.92 with test3 JSON', () => {
    spyOn(test3service, 'getData').and.returnValue(of(test3Data));
    component.ngOnInit(3);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-23.92, 2);
  });

  xit('should return y = 528.4294 if x = 386 with3 test JSON', () => {
    spyOn(test3service, 'getData').and.returnValue(of(test3Data));
    component.ngOnInit(3);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(528.4294, 4);
  });

  xit('should return B1 = 0.140164 with test4 JSON', () => {
    spyOn(test4service, 'getData').and.returnValue(of(test4Data));
    component.ngOnInit(4);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(0.140164, 6);
  });

  xit('should return B0 = -4.604 with test4 JSON', () => {
    spyOn(test4service, 'getData').and.returnValue(of(test4Data));
    component.ngOnInit(4);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-4.604, 3);
  });

  xit('should return y = 49.4994 if x = 386 with test4 JSON', () => {
    spyOn(test4service, 'getData').and.returnValue(of(test4Data));
    component.ngOnInit(4);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(49.4994, 4);
  });



  it('should fetch data for route 1 and handle response', fakeAsync(() => {
    spyOn(component.test1, 'getData').and.returnValue(of({ proxy_size: [1, 2], actual_added: [3, 4] }));
    component.fetchDataForRoute(1);
    tick();
    expect(component.lista1).toEqual([1, 2]);
    expect(component.lista2).toEqual([3, 4]);
    expect(component.sumX).toBe(3);
    expect(component.sumY).toBe(7);
  }));

  it('should fetch data for route 2 and handle response', fakeAsync(() => {
    spyOn(component.test2, 'getData').and.returnValue(of({ proxy_size: [5, 6], actual_develop: [7, 8] }));
    component.fetchDataForRoute(2);
    tick();
    expect(component.lista1).toEqual([5, 6]);
    expect(component.lista2).toEqual([7, 8]);
    expect(component.sumX).toBe(11);
    expect(component.sumY).toBe(15);
  }));

  it('should fetch data for route 3 and handle response', fakeAsync(() => {
    spyOn(component.test3, 'getData').and.returnValue(of({ plan_added: [5, 6], actual_added: [7, 8] }));
    component.fetchDataForRoute(3);
    tick();
    expect(component.lista1).toEqual([5, 6]);
    expect(component.lista2).toEqual([7, 8]);
    expect(component.sumX).toBe(11);
    expect(component.sumY).toBe(15);
  }));

  it('should fetch data for route 4 and handle response', fakeAsync(() => {
    spyOn(component.test4, 'getData').and.returnValue(of({ plan_added: [5, 6], actual_develop: [7, 8] }));
    component.fetchDataForRoute(4);
    tick();
    expect(component.lista1).toEqual([5, 6]);
    expect(component.lista2).toEqual([7, 8]);
    expect(component.sumX).toBe(11);
    expect(component.sumY).toBe(15);
  }));

  it('should handle data response', () => {
    component.lista1 = [1, 2, 3];
    component.lista2 = [4, 5, 6];
    component.handleDataResponse({});
    expect(component.sumX).toBe(6);
    expect(component.sumY).toBe(15);
  });


});
