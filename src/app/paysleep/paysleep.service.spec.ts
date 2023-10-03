import { TestBed } from '@angular/core/testing';

import { PaysleepService } from './paysleep.service';

describe('PaysleepService', () => {
  let service: PaysleepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaysleepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
