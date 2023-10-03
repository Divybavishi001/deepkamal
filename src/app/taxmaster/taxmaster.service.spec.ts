import { TestBed } from '@angular/core/testing';

import { TaxmasterService } from './taxmaster.service';

describe('TaxmasterService', () => {
  let service: TaxmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
