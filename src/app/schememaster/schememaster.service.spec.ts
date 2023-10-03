import { TestBed } from '@angular/core/testing';

import { SchememasterService } from './schememaster.service';

describe('SchememasterService', () => {
  let service: SchememasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchememasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
