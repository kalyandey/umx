'use strict';

var app = angular.module('umxApp');

   app.controller('loginCtrl', function ($scope,  $http, $state){

   
	$scope.loginMethod = function(){
  
	  alert($scope.login_email123);
	  alert($scope.login_password);
	  //$http({
	  //  url:"login",
	  //  method:'post',
	  //  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  //  data:'email='+ $scope.login_email + '&password = ' + $scope.login_password,
	  //  }).success(function(res){
	  //	$scope.login_password = res;
	  //});
	  
	}
  });
