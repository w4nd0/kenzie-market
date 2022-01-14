import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import Cart from "./Cart";
import Product from "./Product";

@Entity("carts_products")
class CartProduct {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @ManyToOne(() => Cart)
  cart: Cart;

  @Column()
  productId: string;

  @Column()
  cartId: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default CartProduct;
