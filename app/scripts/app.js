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
     })
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard.html'
      });

  });

app.controller('Controller', function($scope, ModalService){

  $scope.show = function(){
    ModalService.showModal({
      templateUrl: 'views/terms.html',
      controller: 'ModalCtrl'
    }).then(function(modal){
      modal.element.modal();
      modal.close.then(function(result){
        $scope.message = 'test' + result;
      });
    });
  };
});

app.controller('ModalCtrl', function($scope, close){
  $scope.close = function(result){
    close(result,500);
  };
});