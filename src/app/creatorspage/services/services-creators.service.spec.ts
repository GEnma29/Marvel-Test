import { TestBed } from '@angular/core/testing';

import { ServicesCreatorsService } from './services-creators.service';

describe('ServicesCreatorsService', () => {
  let service: ServicesCreatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCreatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
