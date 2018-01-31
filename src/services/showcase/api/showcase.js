// Defines the showcase api, added to server
// by calling require(../api/showcase)

'use strict';

module.exports = (app, options) => {
	app.get("/showcase", function(req, res, next) {
		options.repository.getShowcaseItems().then((showcaseItems) => {
			res.status(200).send(showcaseItems.map((showcaseItem) => {
				return {
					url: showcaseItem.url,
					name: showcaseItem.name,
					author: showcaseItem.author,
					narrator: showcaseItem.narrator
				}
			}));
		})
		.catch(next);
	});
}
