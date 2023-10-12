import { TestBed } from '@angular/core/testing';

import { PaginationService2 } from './pagination2.service';

describe('PaginationService', () => {
  let service: PaginationService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
