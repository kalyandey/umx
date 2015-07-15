'use strict';

angular.module('umxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('create',{
      	url: '/create',
      	templateUrl: 'app/dashboard/product-create.html',
      	controller: 'DashboardCtrl'
      });
  });