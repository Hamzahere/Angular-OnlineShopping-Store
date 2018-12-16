import { TestBed } from '@angular/core/testing';

import { LoggingCheckService } from './logging-check.service';

describe('LoggingCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggingCheckService = TestBed.get(LoggingCheckService);
    expect(service).toBeTruthy();
  });
});
