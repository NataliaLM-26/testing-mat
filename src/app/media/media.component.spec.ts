import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { HttpClientModule } from '@angular/common/http';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    component.calculateMean;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the mean', () => {
    component.ngOnInit();
    expect(component.calculateMean).toBe(550.6);
  });

  /* it('should calculate the mean', () => {
    expect(component.calculateMean).toBe(550.6);
  }); */
});
