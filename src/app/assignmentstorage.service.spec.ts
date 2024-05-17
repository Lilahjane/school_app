import { TestBed } from '@angular/core/testing';

import { AssignmentstorageService } from './assignmentstorage.service';

describe('AssignmentstorageService', () => {
  let service: AssignmentstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
