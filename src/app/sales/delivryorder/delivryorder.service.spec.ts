import { TestBed } from '@angular/core/testing';

import { DelivryorderService } from './delivryorder.service';

describe('DelivryorderService', () => {
  let service: DelivryorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelivryorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
