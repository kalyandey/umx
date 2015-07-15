'use strict';

var app = angular.module('umxApp');

app.config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      }),$stateProvider
      .state('signup', {
        url: '/signup/:email',
        templateUrl: 'app/register/register.html',
        controller: 'StudentCreateCtrl'
      })
    

  });

app.run( function($rootScope, $location,$window,$http) {
  console.log($rootScope);
});