'use strict';

var app = angular.module('umxApp');

//['ngFileUpload','ui.router']

  app.controller('DashboardCtrl', function ($scope,$http) {
    
   
  });

  app.controller('CreateController', function ($scope, $modal) {
    $scope.openModal = function () {
      $modal.open({
        templateUrl: 'CreateModal.html',
        controller: 'ModalCtrl'
      });
  
    };
  });
  
  app.controller('ConditionController', function ($scope) {
    $scope.items = [
      'new',
      'Like new',
      'used',
      'free'
    ];
  });
  
  app.controller('ItemController', function ($scope,$http) {
    
      $scope.category_list = "";
    
        $http({
	  url:"category_list",
	  method:'post',
	  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  data:'',
	  }).success(function(res){
                //console.log(res);
		$scope.category_list = res;
	  });
    
    $scope.toggleCategories = function () {
      $scope.categoriesActive = ($scope.categoriesActive) ? false : true;
      return $scope.categoriesActive;
    };
    
  });
  
  
  app.controller('ProductListController', function ($scope, $http) {
       
       $http({
	  url:"product_list",
	  method:'post',
	  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  data:'',
	  }).success(function(res){
                //console.log(res);
		$scope.products = res;
	  });
       
       
  });
  
  app.controller('productCategoryCtrl', function ($scope, $http, $state) {
       var slug = $state.params.slug;
       console.log(slug);
        
         
       $http({
	  url:"product_list",
	  method:'post',
	  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  data:'slug='+slug,
	  }).success(function(res){
                //console.log(res);
		$scope.products = res;
	  });
       
       
  });

  
  app.controller('ProductController',function ($scope,productResource,$http,Upload, $location, Global){
    if (Global.log() == '') {
      $location.path('/');    
    }
    $scope.msg = '';
    $scope.productimg	= '';
    $scope.$watch('files', function () {
        $scope.onFileSelect($scope.files);
    });
    
    
    $scope.onFileSelect = function(files) {
      if (files && files.length) {
      $scope.productimg = files[0];
      }
    }
  
    $http({
	  url:"category_list",
	  method:'post',
	  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  data:'',
	  }).success(function(res){
		$scope.category_list = res;
	  });
    
    $scope.addProduct = function(){
        if ($scope.productimg != '') {
	  Upload.upload({
		url: 'productimage',
		fields: '',
		headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
		file: $scope.productimg
	    }).progress(function (evt) {
		var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);		
	    }).success(function (data, status, headers, config) {
	              $http({
			url:"addproduct",
			method:'post',
			headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
			data:'name='+$scope.name+'&price='+$scope.price+'&category='+$scope.category+'&condition='+$scope.condition+'&description='+$scope.description+'&picture='+data,
			}).success(function(res){
			      $scope.msg = res;
		      });
	    }).error(function (data, status, headers, config) {
		
	    });
	}else{
	   $http({
	      url:"addproduct",
	      method:'post',
	      headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	      data:'name='+$scope.name+'&price='+$scope.price+'&category='+$scope.category+'&condition='+$scope.condition+'&description='+$scope.description+'&picture=',
	      }).success(function(res){
		    $scope.msg = res;
	    }); 
	}

        
        
        
      }
    
    });
  
  

