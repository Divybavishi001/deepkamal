import { TestBed } from '@angular/core/testing';

import { MultiplevehicletaxService } from './multiplevehicletax.service';

describe('MultiplevehicletaxService', () => {
  let service: MultiplevehicletaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplevehicletaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
