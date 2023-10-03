import { TestBed } from '@angular/core/testing';

import { BookingreceiptService } from './bookingreceipt.service';

describe('BookingreceiptService', () => {
  let service: BookingreceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingreceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
