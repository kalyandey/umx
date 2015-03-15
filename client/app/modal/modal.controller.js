'use strict';

angular.module('umxApp')
  .controller('ModalCtrl', function ($scope, $modalInstance) {
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
