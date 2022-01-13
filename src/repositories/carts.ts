import { EntityRepository, Repository } from "typeorm";
import { Cart } from "../models/Cart";

@EntityRepository(Cart)
class CartsRepository extends Repository<Cart> {}

export { CartsRepository };
