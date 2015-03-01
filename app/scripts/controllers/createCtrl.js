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


app.controller('ConditionController', function ($scope){
    $scope.items = [
      'new',
      'Like new',
      'used',
      'free'
    ];
});
