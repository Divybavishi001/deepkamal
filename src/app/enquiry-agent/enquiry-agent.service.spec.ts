import { TestBed } from '@angular/core/testing';

import { EnquiryAgentService } from './enquiry-agent.service';

describe('EnquiryAgentService', () => {
  let service: EnquiryAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
