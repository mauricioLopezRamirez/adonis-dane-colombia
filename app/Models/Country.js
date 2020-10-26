'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Country extends Model {
	//Relacion de Pais:1 - n:Departamentos
	deparmament() {
		return this.hasMany('App/Models/Deparmament');
	}
	//Relacion de Pais:1 - n:Ciudades
	city() {
		return this.hasMany('App/Models/City');
	}
}

module.exports = Country
