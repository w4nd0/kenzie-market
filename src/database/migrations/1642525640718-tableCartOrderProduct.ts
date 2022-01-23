import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class tableCartOrderProduct1642525640718 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "carts_orders_products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "productId",
            type: "uuid",
          },
          {
            name: "cartId",
            type: "uuid",
          },
          {
            name: "userId",
            type: "uuid",
          },
          {
            name: "orderId",
            type: "uuid",
            isNullable: true,
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "carts_orders_products",
      new TableForeignKey({
        name: "CartsFK",
        columnNames: ["cartId"],
        referencedColumnNames: ["id"],
        referencedTableName: "carts",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "carts_orders_products",
      new TableForeignKey({
        name: "ProductsFK",
        columnNames: ["productId"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "carts_orders_products",
      new TableForeignKey({
        name: "OrdersFK",
        columnNames: ["orderId"],
        referencedColumnNames: ["id"],
        referencedTableName: "orders",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "carts_orders_products",
      new TableForeignKey({
        name: "UsersFK",
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("carts_orders_products", "CartsFK");
    await queryRunner.dropForeignKey("carts_orders_products", "ProductsFK");
    await queryRunner.dropForeignKey("carts_orders_products", "OrdersFK");
    await queryRunner.dropTable("carts_orders_products");
  }
}
