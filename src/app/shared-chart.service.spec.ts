import { TestBed } from '@angular/core/testing';

import { SharedChartService } from './shared-chart.service';

describe('SharedChartService', () => {
  let service: SharedChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
