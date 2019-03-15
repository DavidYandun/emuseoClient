import { TestBed } from '@angular/core/testing';

import { GeologicalcontextService } from './geologicalcontext.service';

describe('GeologicalcontextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeologicalcontextService = TestBed.get(GeologicalcontextService);
    expect(service).toBeTruthy();
  });
});
