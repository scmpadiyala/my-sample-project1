import { TestBed, inject } from '@angular/core/testing';

import { AsynsampleService } from './asynsample.service';

describe('AsynsampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsynsampleService]
    });
  });

  it('should be created', inject([AsynsampleService], (service: AsynsampleService) => {
    expect(service).toBeTruthy();
  }));
});
