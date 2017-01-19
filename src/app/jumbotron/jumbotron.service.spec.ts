/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JumbotronService } from './jumbotron.service';

describe('JumbotronService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JumbotronService]
    });
  });

  it('should ...', inject([JumbotronService], (service: JumbotronService) => {
    expect(service).toBeTruthy();
  }));
});
