import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema
  .createTable('tutor', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('phone');
  })
  .createTable('pet', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('species');
    table.enum('breed', ['dog', 'cat']);
    table.integer('tutorId').unsigned();
    table.foreign('tutorId').references('tutor.id');
  });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("pet");
    await knex.schema.dropTable("tutor");
}
