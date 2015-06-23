'use strict';

angular.module('umxApp')
  .factory('register', function ($resource) {
      return $resource('http://umx.cloudapp.net/server/api/registration/:email', { email: '@email'}, {
    update: {
      method: 'PUT'
    }
  });
});

