import { TestBed } from '@angular/core/testing';

import { FishapiService } from './fishapi.service';

describe('FishapiService', () => {
  let service: FishapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
