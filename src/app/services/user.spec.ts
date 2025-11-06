import { TestBed } from '@angular/core/testing';

import { user } from './user';

describe('User', () => {
  let service: user;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(user);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
