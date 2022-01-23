import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class tokenTable1642947050525 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tokens",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "userId",
            type: "uuid",
          },
          {
            name: "token",
            type: "varchar",
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "tokens",
      new TableForeignKey({
        name: "usersFK",
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tokens");
  }
}
