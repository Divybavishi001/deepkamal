import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpaComponent } from './hpa.component';

describe('HpaComponent', () => {
  let component: HpaComponent;
  let fixture: ComponentFixture<HpaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HpaComponent]
    });
    fixture = TestBed.createComponent(HpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
