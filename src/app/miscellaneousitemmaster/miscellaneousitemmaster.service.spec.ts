import { TestBed } from '@angular/core/testing';

import { MiscellaneousitemmasterService } from './miscellaneousitemmaster.service';

describe('MiscellaneousitemmasterService', () => {
  let service: MiscellaneousitemmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscellaneousitemmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
