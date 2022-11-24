import { TestBed } from '@angular/core/testing';

import { IngDescDrinkResolver } from './ing-desc-drink.resolver';

describe('IngDescDrinkResolver', () => {
  let resolver: IngDescDrinkResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IngDescDrinkResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
