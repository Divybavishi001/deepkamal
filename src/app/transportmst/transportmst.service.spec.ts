import { TestBed } from '@angular/core/testing';

import { TransportmstService } from './transportmst.service';

describe('TransportmstService', () => {
  let service: TransportmstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportmstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
