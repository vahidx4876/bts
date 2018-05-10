import { TestBed, inject } from '@angular/core/testing';

import { TokenstorageService } from './tokenstorage.service';

describe('TokenstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenstorageService]
    });
  });

  it('should be created', inject([TokenstorageService], (service: TokenstorageService) => {
    expect(service).toBeTruthy();
  }));
});
