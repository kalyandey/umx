'use strict';

app.controller('CreateController', function ($scope, $modal) {
  $scope.openModal = function () {
    $modal.open({
      templateUrl: 'CreateModal.html',
      controller: 'ModalCtrl'
    });

  };
  $scope.linkItems = {
    'Settings': '#',
    'Sign Out': '/'
  };
});
