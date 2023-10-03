import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailinvoiceComponent } from './retailinvoice.component';

describe('RetailinvoiceComponent', () => {
  let component: RetailinvoiceComponent;
  let fixture: ComponentFixture<RetailinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailinvoiceComponent]
    });
    fixture = TestBed.createComponent(RetailinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
