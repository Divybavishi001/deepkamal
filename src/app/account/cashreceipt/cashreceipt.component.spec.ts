import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashreceiptComponent } from './cashreceipt.component';

describe('CashreceiptComponent', () => {
  let component: CashreceiptComponent;
  let fixture: ComponentFixture<CashreceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashreceiptComponent]
    });
    fixture = TestBed.createComponent(CashreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
