import { TestBed } from '@angular/core/testing';

import { ViewcomplaintService } from './viewcomplaint.service';

describe('ViewcomplaintService', () => {
  let service: ViewcomplaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewcomplaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
