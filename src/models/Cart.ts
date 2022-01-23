import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import CartOrderProduct from "./CartOrderProduct";
import User from "./User";

@Entity("carts")
class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  total: number;

  @OneToMany(
    () => CartOrderProduct,
    (cartOrderProduct) => cartOrderProduct.cart,
    {
      eager: true,
    }
  )
  products: CartOrderProduct[];

  @OneToOne(() => User, (user) => user.cart)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @Exclude()
  @Column()
  cartOwner: string;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Cart;
