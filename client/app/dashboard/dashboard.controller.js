'use strict';

angular.module('umxApp')

  .controller('DashboardCtrl', function ($scope) {
    
  })

  .controller('CreateController', function ($scope, $modal) {
    $scope.openModal = function () {
      $modal.open({
        templateUrl: 'CreateModal.html',
        controller: 'ModalCtrl'
      });

    };
  })

  .controller('ConditionController', function ($scope) {
    $scope.items = [
      'new',
      'Like new',
      'used',
      'free'
    ];
  })

  .controller('ItemController', function ($scope) {
    $scope.toggleCategories = function () {
      $scope.categoriesActive = ($scope.categoriesActive) ? false : true;
      return $scope.categoriesActive;
    };
    this.products = items;
  })


  .controller('ProductListController', function ($scope, productResource) {
       $scope.products = productResource.query();
  })
  .controller('ProductCreateController', function ($scope, productResource){
      $scope.createProduct = function(){
          productResource.save({id: $scope.id});
      };
  });

/*
      $scope.listProducts = function(){
          $scope.products = $scope.productsResource.query();
      };

      $scope.deleteProduct = function(product){
        product.$delete().then(function (){
          $scope.products.splice($scope.products.indexOf(product), 1);
        });
      };

      $scope.createProduct = function(product){
        new $scope.productsResource(product).$save().then(function (newProduct){
          $scope.products.push(newProduct);
          $scope.editedProduct = null;
        });
      };

      $scope.updateProduct = function(product){
        product.$save();
        $scope.editedProduct = null;
      };

      $scope.startEdit = function(product){
        $scope.editedProduct = product;
      };

      $scope.cancelEdit = function(){
        $scope.editedProduct = null;
      };

      $scope.listProducts();
*/
   // });
