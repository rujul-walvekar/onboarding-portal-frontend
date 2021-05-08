/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OnboardService } from './onboard.service';

describe('Service: Onboard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnboardService]
    });
  });

  it('should ...', inject([OnboardService], (service: OnboardService) => {
    expect(service).toBeTruthy();
  }));
});
