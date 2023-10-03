import { TestBed } from '@angular/core/testing';

import { RetailinvoiceService } from './retailinvoice.service';

describe('RetailinvoiceService', () => {
  let service: RetailinvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailinvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
