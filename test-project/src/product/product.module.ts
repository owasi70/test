import { Module,NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { ProductMiddlewareMiddleware } from 'src/product-middleware/product-middleware.middleware';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';

@Module({
  imports: [Product],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ProductMiddlewareMiddleware)
    .forRoutes({path: 'product', method: RequestMethod.ALL})
  }
}
