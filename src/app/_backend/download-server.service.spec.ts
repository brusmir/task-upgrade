import { TestBed } from '@angular/core/testing';

import { DownloadServerService } from './download-server.service';

describe('DownloadServerService', () => {
  let service: DownloadServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
