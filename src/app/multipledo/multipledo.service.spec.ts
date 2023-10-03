import { TestBed } from '@angular/core/testing';

import { MultipledoService } from './multipledo.service';

describe('MultipledoService', () => {
  let service: MultipledoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipledoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
