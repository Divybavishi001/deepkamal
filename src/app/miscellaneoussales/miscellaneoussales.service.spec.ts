import { TestBed } from '@angular/core/testing';

import { MiscellaneoussalesService } from './miscellaneoussales.service';

describe('MiscellaneoussalesService', () => {
  let service: MiscellaneoussalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscellaneoussalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
