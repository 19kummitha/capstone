import { TestBed } from '@angular/core/testing';

import { AddresidentService } from './addresident.service';

describe('AddresidentService', () => {
  let service: AddresidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddresidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
