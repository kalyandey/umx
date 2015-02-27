'use strict';

app.factory('RegisterService', function ($resource) {
	return $resource('http://umx.cloudapp.net/server/api/registration/:email', { email: '@email'}, {
		update: {
			method: 'PUT'
		}
	});
});

