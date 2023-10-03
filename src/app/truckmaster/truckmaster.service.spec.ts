import { TestBed } from '@angular/core/testing';

import { TruckmasterService } from './truckmaster.service';

describe('TruckmasterService', () => {
  let service: TruckmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
