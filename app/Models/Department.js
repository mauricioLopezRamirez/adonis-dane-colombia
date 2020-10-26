'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Department extends Model {
    // Relacion de Departmento:1 - n:Ciudades
    cities() {
        return this.hasMany('App/Models/City');
    }

    country() {
        return this.belongsTo('App/Models/Country', 'country_id', 'id');
    }
}

module.exports = Department;
