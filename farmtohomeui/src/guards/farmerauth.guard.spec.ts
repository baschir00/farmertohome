import { TestBed, async, inject } from '@angular/core/testing';

import { FarmerauthGuard } from './farmerauth.guard';

describe('FarmerauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmerauthGuard]
    });
  });

  it('should ...', inject([FarmerauthGuard], (guard: FarmerauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
