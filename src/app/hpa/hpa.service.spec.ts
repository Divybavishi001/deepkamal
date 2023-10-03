import { TestBed } from '@angular/core/testing';

import { HpaService } from './hpa.service';

describe('HpaService', () => {
  let service: HpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
