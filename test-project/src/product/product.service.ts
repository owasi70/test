import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  private product = [
   {
    id: 1,
    name: 'Arduino',
   }, 
  ];

  findAll() {
    return this.product;
  }

  findById(id: number) {
    return this.product.find((product) => product.id === id);
  }

  create(createProductDto: CreateProductDto) {
    const lastId = [...this.product].sort((a, b) => b.id - a.id);
    const newProduct = {
      id: lastId[0].id + 1,
      ...createProductDto,
    };
    this.product.push(newProduct);
    return newProduct;
  }
}
