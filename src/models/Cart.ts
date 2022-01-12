import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import CartProduct from "./CartProduct";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  total: number;

  @Column()
  email: string;

  @OneToMany(() => CartProduct, (cartProduct) => cartProduct.cart)
  products: CartProduct[];

  @Column()
  userId: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Cart;
