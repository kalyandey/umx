'use strict';

angular.module('umxApp')
.controller('MainCtrl', function ($scope, $modal, matchmedia) {

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

  $scope.openModal = function () {
    $modal.open({
      templateUrl: 'TermsModal.html',
      controller: 'ModalCtrl'
    });
  };
});
