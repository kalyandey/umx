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
  'matchmedia-ng',
  'satellizer'
])
/** 
Routing
**/
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingController',
        templateUrl: '../views/landing.html'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: '../views/dashboard.html'
      });
    $urlRouterProvider.otherwise('/');

  })
/** 
Routing End
**/

/** 
Landing Controller
**/
  .controller('LandingController', function ($scope, $modal, matchmedia) {

    matchmedia.onPhone(function (mediaQueryList) {
      $scope.phone = matchmedia.isPhone();
      if ($scope.phone) {
        $scope.mobileViewClass = 'out';
        $scope.signIn = function () {
          $scope.mobileViewClass = 'bounceInDown';
        };
        $scope.closeSignIn = function () {
          $scope.mobileViewClass = 'out bounceOutUp';
        };
      }
    });

    matchmedia.onDesktop(function (mediaQueryList) {
      $scope.desktop = matchmedia.isDesktop();
      $scope.tablet = matchmedia.isTablet();
      if ($scope.desktop || $scope.tablet) {
        $scope.signIn = function () {
          $scope.signInToggle = 'expanded';
        };
        $scope.closeSignIn = function () {
          $scope.signInToggle = '';
        };
      }
    });
/** 
Landing Controller End
**/

/** 
Modal
**/
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
  })
/** 
Modal End
**/


/** 
Authentication
**/
.config(function($authProvider){
  $authProvider.oauth2({
      name: 'umx',
      url: 'http://umx.azurewebsites.net:80/api/login',
      redirectUri: window.location.origin,
      clientId: 'CBVSKYUTJKHCCTEZIGWKEWFZOGP4E6I5',
      authorizationEndpoint: 'http://umx.azurewebsites.net:80/api/oauth/authorize'
  });
});
/** 
Authentication End
**/