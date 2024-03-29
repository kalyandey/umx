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
       $stateProvider.state('product',{
      	url: '/product/:slug',
      	templateUrl: 'app/dashboard/dashboard.html',
      	controller: 'productCategoryCtrl'
      });
      // $stateProvider.state('productimage',{
      //	url: '/productimage',
      //	templateUrl: 'app/dashboard/product-create.html',
      //	controller: 'DashboardCtrl'
      //});
  });