import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbankcontraComponent } from './cashbankcontra.component';

describe('CashbankcontraComponent', () => {
  let component: CashbankcontraComponent;
  let fixture: ComponentFixture<CashbankcontraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashbankcontraComponent]
    });
    fixture = TestBed.createComponent(CashbankcontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
