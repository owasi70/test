import { ProductMiddlewareMiddleware } from './product-middleware.middleware';

describe('ProductMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new ProductMiddlewareMiddleware()).toBeDefined();
  });
});
