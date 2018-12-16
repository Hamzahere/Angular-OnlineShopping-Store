import { TestBed } from '@angular/core/testing';

import { ListofprodService } from './listofprod.service';

describe('ListofprodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListofprodService = TestBed.get(ListofprodService);
    expect(service).toBeTruthy();
  });
});
