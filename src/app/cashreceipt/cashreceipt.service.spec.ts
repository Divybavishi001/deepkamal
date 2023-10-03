import { TestBed } from '@angular/core/testing';

import { CashreceiptService } from './cashreceipt.service';

describe('CashreceiptService', () => {
  let service: CashreceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashreceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
