import { TestBed } from '@angular/core/testing';

import { CrtempService } from './crtemp.service';

describe('CrtempService', () => {
  let service: CrtempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrtempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
