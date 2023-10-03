import { TestBed } from '@angular/core/testing';

import { FinancecosegmentService } from './financecosegment.service';

describe('FinancecosegmentService', () => {
  let service: FinancecosegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancecosegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
