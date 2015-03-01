'use strict';

app.controller('ProductListController', function ($scope, $state, Product){
	
	//get all the products in the db
	$scope.product = Product.query();

	$scope.deleteProduct = function(product) {
		product.$delete();
	};
});

app.controller('ProductViewController', function ($scope, Product,ProductService){
	//Get a single product from the list
	$scope.id = null;
	$scope.getProduct = function(){
		ProductService.get({id:$scope.id});
	};
});

app.controller('ProductCreateController', function($scope, Product,ProductService){
	$scope.product = new Product();

	$scope.addProduct = function(){
		ProductService.save({id:$scope.id});
	};
});

app.controller('ProductEditController', function($scope, Product, ProductService){
	$scope.updateProduct = function(){
		$scope.product.$update();
	};

	//get a product to update
	$scope.product = function(){
		ProductService.get({id:$scope.id});
	};
	//load the product that was just updated
	$scope.loadProduct();

});

