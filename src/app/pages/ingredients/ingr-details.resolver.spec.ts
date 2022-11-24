import { TestBed } from '@angular/core/testing';

import { IngrDetailsResolver } from './ingr-details.resolver';

describe('IngrDetailsResolver', () => {
  let resolver: IngrDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IngrDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
