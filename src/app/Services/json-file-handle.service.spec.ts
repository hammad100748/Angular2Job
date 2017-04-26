import { TestBed, inject } from '@angular/core/testing';

import { JsonFileHandleService } from './json-file-handle.service';

describe('JsonFileHandleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonFileHandleService]
    });
  });

  it('should ...', inject([JsonFileHandleService], (service: JsonFileHandleService) => {
    expect(service).toBeTruthy();
  }));
});
