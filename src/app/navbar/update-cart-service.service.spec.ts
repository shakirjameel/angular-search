/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateCartServiceService } from './update-cart-service.service';

describe('UpdateCartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateCartServiceService]
    });
  });

  it('should ...', inject([UpdateCartServiceService], (service: UpdateCartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
