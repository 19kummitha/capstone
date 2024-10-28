import { TestBed } from '@angular/core/testing';

import { AddserviceproviderService } from './addserviceprovider.service';

describe('AddserviceproviderService', () => {
  let service: AddserviceproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddserviceproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
