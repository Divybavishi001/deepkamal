import { TestBed } from '@angular/core/testing';

import { ExpenseregisterService } from './expenseregister.service';

describe('ExpenseregisterService', () => {
  let service: ExpenseregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
