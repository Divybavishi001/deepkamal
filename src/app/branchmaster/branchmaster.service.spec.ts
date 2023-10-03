import { TestBed } from '@angular/core/testing';

import { BranchmasterService } from './branchmaster.service';

describe('BranchmasterService', () => {
  let service: BranchmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
