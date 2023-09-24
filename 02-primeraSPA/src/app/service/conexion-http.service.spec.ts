import { TestBed } from '@angular/core/testing';

import { ConexionHttpService } from './conexion-http.service';

describe('ConexionHttpService', () => {
  let service: ConexionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
