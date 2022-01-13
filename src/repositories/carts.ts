import { EntityRepository, Repository } from "typeorm";
import { Cart } from "../models/Cart";

@EntityRepository(Cart)
class UsersRepository extends Repository<Cart> {}

export { UsersRepository };
