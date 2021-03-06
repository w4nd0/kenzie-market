import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Cart from "./Cart";
import Product from "./Product";
import { Exclude } from "class-transformer";
import Order from "./Order";
import User from "./User";

@Entity("carts_orders_products")
class CartOrderProduct {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @ManyToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => User)
  user: User;

  @Exclude()
  @Column()
  productId: string;

  @Exclude()
  @Column()
  cartId: string;

  @Exclude()
  @Column()
  orderId: string;

  @Exclude()
  @Column()
  userId: string;
}

export default CartOrderProduct;
