import { TestBed, async, inject } from '@angular/core/testing';

import { AuthngGuard } from './authng.guard';

describe('AuthngGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthngGuard]
    });
  });

  it('should ...', inject([AuthngGuard], (guard: AuthngGuard) => {
    expect(guard).toBeTruthy();
  }));
});
