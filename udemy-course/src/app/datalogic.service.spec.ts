import { TestBed } from '@angular/core/testing';

import { DatalogicService } from './datalogic.service';

describe('DatalogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatalogicService = TestBed.get(DatalogicService);
    expect(service).toBeTruthy();
  });
});
