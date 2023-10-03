import { TestBed } from '@angular/core/testing';

import { LocatiomService } from './locatiom.service';

describe('LocatiomService', () => {
  let service: LocatiomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocatiomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
