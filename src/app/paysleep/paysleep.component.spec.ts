import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysleepComponent } from './paysleep.component';

describe('PaysleepComponent', () => {
  let component: PaysleepComponent;
  let fixture: ComponentFixture<PaysleepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaysleepComponent]
    });
    fixture = TestBed.createComponent(PaysleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
