'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CountrySchema extends Schema {
  up() {
    this.create('countries', table => {
      table.increments();
      table.string('name', 25).notNullable().unique();
      table.string('code', 20).notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop('countries');
  }
}

module.exports = CountrySchema;
