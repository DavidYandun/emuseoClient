import { TestBed } from '@angular/core/testing';

import { BasisofrecordService } from './basisofrecord.service';

describe('BasisofrecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasisofrecordService = TestBed.get(BasisofrecordService);
    expect(service).toBeTruthy();
  });
});
