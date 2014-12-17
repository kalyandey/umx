'use strict';

/**
 * @ngdoc overview
 * @name umxFrontendApp
 * @description
 * # umxFrontendApp
 *
 * Main module of the application.
 */
 /*global app:true*/
var app = angular.module('umxFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angularModalService'
  ]);

  app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/landing');


    $stateProvider
      .state('landing', {
        url:'/landing',
        templateUrl: 'views/landing.html'
     });
  });
