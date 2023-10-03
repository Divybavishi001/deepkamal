import { TestBed } from '@angular/core/testing';

import { VehicleaftersalesService } from './vehicleaftersales.service';

describe('VehicleaftersalesService', () => {
  let service: VehicleaftersalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleaftersalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
