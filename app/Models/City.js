'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class City extends Model {
    // Realcion Ciudad:1 - 1:Departamento
    department() {
        return this.belongsTo('App/Models/Department', 'department_id', 'id');
    }
}

module.exports = City;
