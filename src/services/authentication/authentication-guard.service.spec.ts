import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './authentication-guard.service';

describe('AuthenticationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
