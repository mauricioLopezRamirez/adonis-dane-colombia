'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CitySchema extends Schema {
  up() {
    this.create('cities', table => {
      table.increments();
      table.string('name', 35).notNullable();
      table.string('code', 20).notNullable();
      table.integer('department_id').unsigned().references('id').inTable('departments');
      table.timestamps();
    });
  }

  down() {
    this.drop('cities');
  }
}

module.exports = CitySchema;
