import { TestBed } from '@angular/core/testing';

import { LedgeraccountService } from './ledgeraccount.service';

describe('LedgeraccountService', () => {
  let service: LedgeraccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedgeraccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
