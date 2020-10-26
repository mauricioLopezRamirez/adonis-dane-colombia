'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class DepartmentSchema extends Schema {
  up() {
    this.create('departments', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('code', 20).notNullable();
      table.integer('country_id').unsigned().references('id').inTable('countries');
      table.timestamps();
    });
  }

  down() {
    this.drop('departments');
  }
}

module.exports = DepartmentSchema;
