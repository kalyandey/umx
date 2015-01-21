'use strict';
/*jshint unused: false, undef:false */
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
  'mm.foundation',
  'matchmedia-ng'
])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: '../views/landing.html'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: '../views/dashboard.html'
      });
    $urlRouterProvider.otherwise('/landing');
  })


  .controller('LandingController', function ($scope, $modal) {

    $scope.mobileViewClass = 'out';

    $scope.openMobileNav = function () {
      $scope.mobileViewClass = 'bounceInLeft';
    };

    $scope.closeMobileNav = function () {
      $scope.mobileViewClass = 'out bounceOutLeft';
    };

    $scope.openModal = function () {
      $modal.open({
        templateUrl: 'TermsModal.html',
        controller: 'ModalCtrl'
      });
    };

  })


  .controller('ModalCtrl', function ($scope, $modalInstance) {

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });
