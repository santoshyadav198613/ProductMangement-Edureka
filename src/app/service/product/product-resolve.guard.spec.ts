import { TestBed, async, inject } from '@angular/core/testing';

import { ProductResolveGuard } from './product-resolve.guard';

describe('ProductResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolveGuard]
    });
  });

  it('should ...', inject([ProductResolveGuard], (guard: ProductResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
