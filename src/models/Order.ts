import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import CartOrderProduct from "./CartOrderProduct";

@Entity("orders")
export class Order {
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

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
