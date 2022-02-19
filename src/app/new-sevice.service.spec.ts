import { TestBed } from '@angular/core/testing';

import { NewSeviceService } from './new-sevice.service';

describe('NewSeviceService', () => {
  let service: NewSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
