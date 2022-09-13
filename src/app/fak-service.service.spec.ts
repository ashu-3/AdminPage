import { TestBed } from '@angular/core/testing';

import { FakServiceService } from './fak-service.service';

describe('FakServiceService', () => {
  let service: FakServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
