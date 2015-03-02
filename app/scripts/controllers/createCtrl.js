'use strict';

app.controller('CreateController', function ($scope, $modal) {
  $scope.openModal = function () {
    $modal.open({
      templateUrl: 'CreateModal.html',
      controller: 'ModalCtrl'
    });

  };
/*  $scope.settingsItems = {
    'Settings': '#',
    'Sign Out': '/'
  };*/
/*    $scope.notificationItems = {
    '{{product.name}} has received a new offer from {{user}}!': '#',
    '{{user}} has accepted the offer on {{product.name}}': '#',
    '{{user}} has rejected the offer on {{product.name}}': '#'
  };*/
});


app.controller('ConditionController', function ($scope){
    $scope.items = [
      'new',
      'Like new',
      'used',
      'free'
    ];
});
