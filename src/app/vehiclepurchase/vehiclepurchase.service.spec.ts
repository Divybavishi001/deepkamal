import { TestBed } from '@angular/core/testing';

import { VehiclepurchaseService } from './vehiclepurchase.service';

describe('VehiclepurchaseService', () => {
  let service: VehiclepurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclepurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
