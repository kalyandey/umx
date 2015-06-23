'use strict';

angular.module('umxApp')
  .factory('productResource', function ($resource) {
      return $resource('http://localhost:2403/products/:id', { id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
});

