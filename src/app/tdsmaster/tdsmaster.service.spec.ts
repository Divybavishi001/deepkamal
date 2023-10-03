import { TestBed } from '@angular/core/testing';

import { TdsmasterService } from './tdsmaster.service';

describe('TdsmasterService', () => {
  let service: TdsmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdsmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
