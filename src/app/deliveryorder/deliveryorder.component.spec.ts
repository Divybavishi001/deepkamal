import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryorderComponent } from './deliveryorder.component';

describe('DeliveryorderComponent', () => {
  let component: DeliveryorderComponent;
  let fixture: ComponentFixture<DeliveryorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryorderComponent]
    });
    fixture = TestBed.createComponent(DeliveryorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
