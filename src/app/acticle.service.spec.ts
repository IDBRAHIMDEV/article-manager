import { TestBed } from '@angular/core/testing';

import { ActicleService } from './acticle.service';

describe('ActicleService', () => {
  let service: ActicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
