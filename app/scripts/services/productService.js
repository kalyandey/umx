'use strict';
//Need the endpoint for the restAPI
app.factory('ProductService', function ($resource) {
	return $resource('', { id: '@id'}, {
		update: {
			method: 'PUT'
		}
	});
});

