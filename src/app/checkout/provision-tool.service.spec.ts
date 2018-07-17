/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProvisionToolService } from './provision-tool.service';

describe('ProvisionToolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvisionToolService]
    });
  });

  it('should ...', inject([ProvisionToolService], (service: ProvisionToolService) => {
    expect(service).toBeTruthy();
  }));
});
