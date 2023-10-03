import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseregisterComponent } from './expenseregister.component';

describe('ExpenseregisterComponent', () => {
  let component: ExpenseregisterComponent;
  let fixture: ComponentFixture<ExpenseregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseregisterComponent]
    });
    fixture = TestBed.createComponent(ExpenseregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
