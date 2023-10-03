import { TestBed } from '@angular/core/testing';

import { AgentenquirycancelService } from './agentenquirycancel.service';

describe('AgentenquirycancelService', () => {
  let service: AgentenquirycancelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentenquirycancelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
