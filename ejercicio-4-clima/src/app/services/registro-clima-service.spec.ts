import { TestBed } from '@angular/core/testing';

import { RegistroClimaService } from './registro-clima-service';

describe('RegistroClimaService', () => {
  let service: RegistroClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
