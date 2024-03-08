import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  import * as bcrypt from 'bcrypt';
  
  @Entity('product')
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true, nullable: false })
    name: string;
  
    @Column({ unique: false, nullable: false })
    description: string;
  
    @Column({ nullable: false })
    price: number;
  
  //  @BeforeInsert()
    //async HashPassword() {
      //this.password = await bcrypt.hash(this.password, 10);
    //}
  }
  