import { ComponentFixture, TestBed, waitForAsync  } from '@angular/core/testing';
import { Front1aComponent } from './front1a.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Datos1Service } from '../services/datos1.service';
import { Datos2Service } from '../services/datos2.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('Front1aComponent', () => {
  let component: Front1aComponent;
  let fixture: ComponentFixture<Front1aComponent>;
  let service1: Datos1Service;
  let service2: Datos2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Front1aComponent],
      imports: [HttpClientTestingModule],
      providers: [Datos1Service, Datos2Service]
    });
    fixture = TestBed.createComponent(Front1aComponent);
    component = fixture.componentInstance;
    service1 = TestBed.inject(Datos1Service);
    service2 = TestBed.inject(Datos2Service);
    fixture.detectChanges();
  });

  /* it('should fetch data from services on initialization', () => {
    component.ngOnInit();

    expect(component.data1).toEqual([160,591,114,229,230,270,128,1657,624,1503]);
    expect(component.data2).toEqual([15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]);
  }); */

  it('should fetch data from services on initialization', waitForAsync(() => {
    const mockData1 = [1, 2, 3];
    const mockData2 = [4, 5, 6];

    // Configura el servicio1 para devolver datos simulados al llamar a getData.
    spyOn(service1, 'getData').and.returnValue(of(mockData1));

    // Configura el servicio2 para devolver datos simulados al llamar a getData.
    spyOn(service2, 'getData').and.returnValue(of(mockData2));

    // Llama a ngOnInit.
    component.ngOnInit();

    fixture.whenStable().then(() => {
      // Verifica que los datos se hayan actualizado correctamente.
      expect(component.data1).toEqual(mockData1);
      expect(component.data2).toEqual(mockData2);
    });
  }));

  it('should load data on initialization', () => {
    component.ngOnInit();
    expect(component.data1).toBeDefined();
    expect(component.data1.length).toBeGreaterThan(0);
  
    expect(component.data2).toBeDefined();
    expect(component.data2.length).toBeGreaterThan(0);
  });

  it('should calculate mean', async() => {
    // Arrange 
    const data = [160,591,114,229,230,270,128,1657,624,1503];
    // Act 
    const mean = component.calculateMean(data);
    fixture.detectChanges();
    // Assert 
    expect(mean).toEqual(550.6);
  });

  it('should calculate standard deviation', () => {
    //Arrange
    const data = [15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2];
    //Act
    const deviation = component.desviacion(data);
    //Assert
    expect(deviation).toEqual(62.26);
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

});
