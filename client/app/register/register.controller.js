'use strict';

var app = angular.module('umxApp');

  app.controller('StudentCreateCtrl', function ($scope, register,$http,$state) {
      
      $scope.email = '';
      console.log($state.params.email);
      $scope.email_enc = $state.params.email;
      
      $http({
	  url:"checkemail",
	  method:'post',
	  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  data:'email='+ $state.params.email,
	  }).success(function(res){
		$scope.email = res;
	  });

	  
    $scope.msg = '';
    $scope.addStudent = function(){

	$http({
	  url:"adduser",
	  method:'post',
	  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  data:'email='+$scope.email_enc+'&name='+$scope.name+'&password='+$scope.password+'&school='+$scope.school,
	  }).success(function(res){
		$scope.msg = res;
	  });
    };


  });
  
  //.controller('StudentEditCtrl', function ($scope, register){
  //	$scope.updateStudent = function(){
  //		register.update({email: $scope.email});
  //	};
  //})
  //.controller('StudentDeleteCtrl', function ($scope, register){
  //	$scope.deleteStudent = function(){
  //		register.remove({email: $scope.email});
  //	};
  //}) 
  //
  
  
//   app.controller('loginCtrl', function ($scope,  $http, $state){
//   
//	$scope.loginMethod = function(){          
//	 
//	  alert($scope.login_email123);
//	  alert($scope.login_password);
//	 
//	  
//	}
//	
//  });
