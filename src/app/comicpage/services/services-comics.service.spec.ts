import { TestBed } from '@angular/core/testing';

import { ServicesComicsService } from './services-comics.service';

describe('ServicesComicsService', () => {
  let service: ServicesComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
