import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import User from "./User";

@Entity("tokens")
export class Token {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  user: User;

  @Column()
  userId: string;

  @Column()
  token: string;
}

export default Token;
