'use strict';

angular.module('umxApp')
  .factory('products', function ($resource) {
      return $resource('http://umx.cloudapp.net/server/api/products/:id', { id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
});

