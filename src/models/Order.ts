import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import CartOrderProduct from "./CartOrderProduct";
import User from "./User";

@Entity("orders")
class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  total: number;

  @OneToMany(
    () => CartOrderProduct,
    (cartOrderProduct) => cartOrderProduct.order,
    {
      eager: true,
    }
  )
  products: CartOrderProduct[];

  @ManyToOne(() => User)
  user: User;

  @Column()
  userId: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Order;
