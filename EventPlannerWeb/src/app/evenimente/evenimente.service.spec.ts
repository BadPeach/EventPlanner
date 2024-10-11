import { TestBed } from '@angular/core/testing';

import { EvenimenteService } from './evenimente.service';

describe('EvenimenteService', () => {
  let service: EvenimenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenimenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
