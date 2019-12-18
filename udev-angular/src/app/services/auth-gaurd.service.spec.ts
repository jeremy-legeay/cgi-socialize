import {TestBed} from '@angular/core/testing';

import {AuthGaurdService} from './auth-gaurd.service';

describe('AuthGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('Vous devez être connecté', () => {
    const service: AuthGaurdService = TestBed.get(AuthGaurdService);
    expect(service).toBeTruthy();
  });
});
