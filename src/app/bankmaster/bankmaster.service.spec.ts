import { TestBed } from '@angular/core/testing';

import { BankmasterService } from './bankmaster.service';

describe('BankmasterService', () => {
  let service: BankmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
