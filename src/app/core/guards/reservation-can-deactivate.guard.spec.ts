import { TestBed, async, inject } from '@angular/core/testing';

import { ReservationCanDeactivateGuard } from './reservation-can-deactivate.guard';

describe('ReservationCanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationCanDeactivateGuard]
    });
  });

  it('should ...', inject([ReservationCanDeactivateGuard], (guard: ReservationCanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
