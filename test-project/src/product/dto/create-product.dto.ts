import {  IsNotEmpty, IsString } from 'class-validator';
export class CreateProductDto {
    id: number ;

    @IsString({ message: 'valid  Product name is required' })
    @IsNotEmpty()
  name: string;

 
}
