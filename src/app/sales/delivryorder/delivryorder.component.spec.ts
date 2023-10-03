import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivryorderComponent } from './delivryorder.component';

describe('DelivryorderComponent', () => {
  let component: DelivryorderComponent;
  let fixture: ComponentFixture<DelivryorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelivryorderComponent]
    });
    fixture = TestBed.createComponent(DelivryorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
