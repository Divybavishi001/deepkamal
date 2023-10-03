import { TestBed } from '@angular/core/testing';

import { MonthlysalesService } from './monthlysales.service';

describe('MonthlysalesService', () => {
  let service: MonthlysalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlysalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
