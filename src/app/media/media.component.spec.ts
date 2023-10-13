import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { HttpClientModule } from '@angular/common/http';
import { Datos1Service } from '../services/datos1.service';
import { Datos2Service } from '../services/datos2.service';
import { of } from 'rxjs';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let service1: Datos1Service;
  let service2: Datos2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    service1= TestBed.inject(Datos1Service);
    service2= TestBed.inject(Datos2Service);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the mean 550.6', () => {
    let espera=[160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(service1, 'getData').and.returnValue(of(espera));
    fixture.detectChanges();
    const dataset = component.getData(1);
    expect(component.calculateMean(dataset)).toBe(550.6);
  });

  it('should return the mean 60.32', () => {
    let espera=[15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(service2, 'getData').and.returnValue(of(espera));
    fixture.detectChanges();
    const dataset = component.getData(2);
    expect(component.calculateMean(dataset)).toBe(60.32);
  });
  
});
