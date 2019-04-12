import { TestBed } from '@angular/core/testing';

import { CatAPIService } from './cat-api.service';

describe('CatAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatAPIService = TestBed.get(CatAPIService);
    expect(service).toBeTruthy();
  });
});
