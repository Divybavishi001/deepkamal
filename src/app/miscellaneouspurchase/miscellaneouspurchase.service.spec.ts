import { TestBed } from '@angular/core/testing';

import { MiscellaneouspurchaseService } from './miscellaneouspurchase.service';

describe('MiscellaneouspurchaseService', () => {
  let service: MiscellaneouspurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscellaneouspurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
