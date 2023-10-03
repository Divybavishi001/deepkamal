import { TestBed } from '@angular/core/testing';

import { TransportexpService } from './transportexp.service';

describe('TransportexpService', () => {
  let service: TransportexpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportexpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
