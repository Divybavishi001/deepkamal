import { TestBed } from '@angular/core/testing';

import { BankreceiptService } from './bankreceipt.service';

describe('BankreceiptService', () => {
  let service: BankreceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankreceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
