import { TestBed } from '@angular/core/testing';

import { Jobsngon } from './jobsngon.service';

describe('HulumapService', () => {
  let service: Jobsngon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jobsngon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
