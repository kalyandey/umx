'use strict';

angular.module('umxApp')
  .controller('ProductsCtrl', function ($scope, products) {
    
  	//get all the products in the list
    $scope.product = products.query();

    $scope.deleteProduct = function(product){
    	products.$remove();
    };
  })
  .controller('ProductViewCtrl', function ($scope, products){
  	  //get a single product from the list
  	  $scope.id = null;
  	  $scope.getProduct = function(){
  	  	products.get({id:$scope.id});
  	  };
  })
  .controller('ProductsCreateCtrl', function ($scope, products){
  	$scope.product  = new products();

  	$scope.addProduct = function(){
  		products.save({id:$scope.id});
  	};
  })
  .controller('ProductEditCtrl', function ($scope, products){
  	$scope.updateProduct = function(){
  		$scope.product.$update();
  	};

  	//get a product to update
  	$scope.product = function(){
  		products.get({id:$scope.id});
  	};

  });
