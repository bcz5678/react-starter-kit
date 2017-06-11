var knex = require('knex')({});
var bookshelf = require('bookshelf')(knex);

exports.up = function(knex) {

	knex.schema.createTable('Room', function(table) {
		table.increments('id').primary().serial().notNullable();
		table.integer('headline').notNullable();
		table.string('address1').notNullable();
		table.string('address1').notNullable();
		table.string('address2').nullable();
		table.string('city').notNullable();
		table.string('state').notNullable();
		table.string('zipcode').notNullable();
		table.string('country').notNullable();
		table.integer('reviewsNumber').notNullable();
		table.decimal('reviewsAverage', 1, 2).notNullable();
		table.string('roomType').notNullable();
		table.string('propertyType').notNullable();
		table.string('checkInStart').notNullable();
		table.string('checkInEnd').notNullable();
		table.string('checkOutStart').notNullable();
		table.string('checkOutEnd').notNullable();
		table.integer('bedrooms').notNullable();
		table.integer('guestsIncluded').notNullable();
		table.integer('guestsMax').notNullable();
		table.integer('beds').notNullable();
		table.decimal('bathrooms').notNullable();
		table.integer('priceWeeknight').notNullable();
		table.integer('priceWeekend').nullable();
		table.integer('priceWeek').nullable();
		table.json('priceSpecial').nullable();
		table.boolean('isInstantBookable').notNullable();
		table.json('images').notNullable();
		table.json('description').notNullable();
		table.timestamps();
	});
}

exports.down = function(knex) {
	knew.schem.dropTableIfExists('Room');

}