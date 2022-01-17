import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import CartProduct from "./CartProduct";
import User from "./User";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  total: number;

  @OneToMany(() => CartProduct, (cartProduct) => cartProduct.cart, {
    eager: true,
  })
  products: CartProduct[];

  @OneToOne(() => User, (user) => user.cart)
  @JoinColumn()
  user: User;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Cart;
