import { TestBed } from '@angular/core/testing';

import { VehicleaccessoryService } from './vehicleaccessory.service';

describe('VehicleaccessoryService', () => {
  let service: VehicleaccessoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleaccessoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
