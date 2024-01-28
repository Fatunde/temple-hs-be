import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable('user', table => {
      table.increments('id')
      table.string('email').notNullable().unique()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('password').notNullable()
      table.string('gender')
      table.string('age')
      table.timestamps(true, true)
   }).createTable('doctor', table => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('field').notNullable()
      table.string('about').notNullable()
      table.string('image').notNullable()
      table.string('enterprise_type').notNullable()
      table.timestamps(true, true)
   }).createTable('slot', table => {
      table.increments('id')
      table.integer('doctor_id').references('id').inTable('doctor')
      table.dateTime('date').notNullable()
      table.boolean('is_occupied').notNullable().defaultTo(false)
      table.timestamps(true, true)
   }).createTable('appointment', table => {
      table.increments('id')
      table.integer('patient_id').references('id').inTable('user')
      table.integer('doctor_id').references('id').inTable('doctor')
      table.integer('slot_id').references('id').inTable('slot')
      table.string('title').notNullable().unique()
      table.string('information').notNullable()
      table.timestamps(true, true)
   })
}


export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTable('user').dropTable('doctor').dropTable('slot').dropTable('appointment')
}

