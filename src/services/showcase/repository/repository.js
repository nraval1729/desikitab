// repository is an abstraction over our rds db

'use strict'

let mysql = require('mysql')

// Note that we don't need to create an explicit connection.connect()
// call since calling the connection.query() implicity does this.
// Source: https://www.npmjs.com/package/mysql
class Repository {
	constructor(connection) {
		this.connection = connection;
	}

	getShowcaseItems() {
		return new Promise((resolve, reject) => {
			this.connection.query('SELECT * FROM audio-metadata', (err, results) => {
				if(err) {
					return reject(new Error("An error occured while querying: " +err));
				}
				resolve((results || []).map((showcaseItem) => {
					return {
						name: showcaseItem.name,
						url: showcaseItem.url,
						author: showcaseItem.author,
						narrator: showcaseItem.narrator
					};
				}));
			});
		});
	}

	disconnect() {
		this.connection.end();
	}
}

// Export a single connect function to be called
// from index.js
module.exports.connect = (connectionSettings) => {
	return new Promise((resolve, reject) => {
		if(!connectionSettings.host) {
			reject(new Error("A host must be specified"));
		}
		if(!connectionSettings.user) {
			reject(new Error("A user must be specified"));
		}
		if(!connectionSettings.password) {
			reject(new Error("A password must be specified"));
		}
		if(!connectionSettings.port) {
			reject(new Error("A port must be specified"));
		}
		if(!connectionSettings.database) {
			reject(new Error("A database must be specified"));
		}

		resolve(new Repository(mysql.createConnection(connectionSettings)));
	});
};
