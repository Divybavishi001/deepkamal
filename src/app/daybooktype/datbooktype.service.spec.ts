import { TestBed } from '@angular/core/testing';

import { DatbooktypeService } from './datbooktype.service';

describe('DatbooktypeService', () => {
  let service: DatbooktypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatbooktypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
