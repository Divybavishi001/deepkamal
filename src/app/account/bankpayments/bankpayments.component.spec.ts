import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankpaymentsComponent } from './bankpayments.component';

describe('BankpaymentsComponent', () => {
  let component: BankpaymentsComponent;
  let fixture: ComponentFixture<BankpaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankpaymentsComponent]
    });
    fixture = TestBed.createComponent(BankpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
