import { TestBed } from '@angular/core/testing';

import { DownloadDocService } from './download-doc.service';

describe('DownloadDocService', () => {
  let service: DownloadDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
