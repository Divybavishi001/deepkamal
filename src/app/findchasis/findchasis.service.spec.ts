import { TestBed } from '@angular/core/testing';

import { FindchasisService } from './findchasis.service';

describe('FindchasisService', () => {
  let service: FindchasisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindchasisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
