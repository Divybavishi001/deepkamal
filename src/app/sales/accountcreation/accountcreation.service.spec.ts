import { TestBed } from '@angular/core/testing';

import { AccountcreationService } from './accountcreation.service';

describe('AccountcreationService', () => {
  let service: AccountcreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountcreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
