import { db  } from '../config';

const knex = require('knex')({
	client: db.client,
	connection: {
		host: db.host,
		user: db.user,
		password: db.password,
		database: db.database,
	},
	pool: {
		min: 3,
		max: 7,
	},
	debug: true,
});

const bookshelf = require('bookshelf')(knex);

export { bookshelf };