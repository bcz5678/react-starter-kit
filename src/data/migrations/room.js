var knex = require('knex')({});
var bookshelf = require('bookshelf')(knex);

exports.up = function(knex) {

	knex.schema.createTable('Room', function(table) {
		table.increments('id').primary().serial().notNullable();
		table.number('host').notNullable();
		table.json('location').notNullable();
		table.json('listing').notNullable();
		table.json('reviews').notNullable();
		table.timestamps();
	});

}

exports.down = function(knex) {
	knew.schem.dropTableIfExists('Room');

}