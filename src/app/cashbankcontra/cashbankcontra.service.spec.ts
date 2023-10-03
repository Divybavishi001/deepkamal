import { TestBed } from '@angular/core/testing';

import { CashbankcontraService } from './cashbankcontra.service';

describe('CashbankcontraService', () => {
  let service: CashbankcontraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashbankcontraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
