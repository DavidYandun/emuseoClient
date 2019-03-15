import { TestBed } from '@angular/core/testing';

import { TaxonService } from './taxon.service';

describe('TaxonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaxonService = TestBed.get(TaxonService);
    expect(service).toBeTruthy();
  });
});
