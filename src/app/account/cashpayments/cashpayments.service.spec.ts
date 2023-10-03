import { TestBed } from '@angular/core/testing';

import { CashpaymentsService } from './cashpayments.service';

describe('CashpaymentsService', () => {
  let service: CashpaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashpaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
