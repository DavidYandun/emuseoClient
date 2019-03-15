import { TestBed } from '@angular/core/testing';

import { RecordLevelService } from './record-level.service';

describe('RecordLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordLevelService = TestBed.get(RecordLevelService);
    expect(service).toBeTruthy();
  });
});
