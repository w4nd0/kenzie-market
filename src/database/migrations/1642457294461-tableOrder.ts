import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class tableOrder1642457294461 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "total",
            type: "decimal",
            default: 0,
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          { name: "userId", type: "uuid", isNullable: true },
          { name: "createdOn", type: "timestamp", default: "now()" },
          { name: "updatedOn", type: "timestamp", default: "now()" },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "orders",
      new TableForeignKey({
        name: "UserFK",
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orders");
  }
}
