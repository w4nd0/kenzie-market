import { EntityRepository, Repository } from "typeorm";
import { Product } from "../models/Product";

@EntityRepository(Product)
class UsersRepository extends Repository<Product> {}

export { UsersRepository };
