import { TestBed, inject } from '@angular/core/testing';

import { ApiaccesService } from './apiacces.service';

describe('ApiaccesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiaccesService]
    });
  });

  it('should be created', inject([ApiaccesService], (service: ApiaccesService) => {
    expect(service).toBeTruthy();
  }));
});
