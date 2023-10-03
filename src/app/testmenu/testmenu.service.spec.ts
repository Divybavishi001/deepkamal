import { TestBed } from '@angular/core/testing';

import { TestmenuService } from './testmenu.service';

describe('TestmenuService', () => {
  let service: TestmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
