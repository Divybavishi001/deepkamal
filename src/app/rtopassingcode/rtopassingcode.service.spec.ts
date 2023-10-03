import { TestBed } from '@angular/core/testing';

import { RtopassingcodeService } from './rtopassingcode.service';

describe('RtopassingcodeService', () => {
  let service: RtopassingcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtopassingcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
