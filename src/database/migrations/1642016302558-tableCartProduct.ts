import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class tableCartProduct1642016302558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "carts_products",
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
        ],
      })
    );
    await queryRunner.createForeignKey(
      "carts_products",
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
      "carts_products",
      new TableForeignKey({
        name: "ProductsFK",
        columnNames: ["productId"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("carts_products", "CartsFK");
    await queryRunner.dropForeignKey("carts_products", "ProductsFK");
    await queryRunner.dropTable("carts_products");
  }
}
