import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Cart from "./Cart";
import Product from "./Product";
import { Exclude } from "class-transformer";

@Entity("carts_products")
class CartProduct {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @ManyToOne(() => Cart)
  cart: Cart;

  @Exclude()
  @Column()
  productId: string;

  @Exclude()
  @Column()
  cartId: string;
}

export default CartProduct;
