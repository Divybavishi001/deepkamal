import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashpaymentsComponent } from './cashpayments.component';

describe('CashpaymentsComponent', () => {
  let component: CashpaymentsComponent;
  let fixture: ComponentFixture<CashpaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashpaymentsComponent]
    });
    fixture = TestBed.createComponent(CashpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
