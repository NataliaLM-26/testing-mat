import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Front3aComponent } from './front3a.component';

describe('Front3aComponent', () => {
  let component: Front3aComponent;
  let fixture: ComponentFixture<Front3aComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Front3aComponent]
    });
    fixture = TestBed.createComponent(Front3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
