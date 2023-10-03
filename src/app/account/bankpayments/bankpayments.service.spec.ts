import { TestBed } from '@angular/core/testing';

import { BankpaymentsService } from './bankpayments.service';

describe('BankpaymentsService', () => {
  let service: BankpaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankpaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
