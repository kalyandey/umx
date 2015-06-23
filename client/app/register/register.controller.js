'use strict';

angular.module('umxApp')
  .controller('StudentCreateCtrl', function ($scope, register) {
    $scope.email = null;

    $scope.addStudent = function(){
    	register.save({email: $scope.email});
    };
  })
  .controller('StudentEditCtrl', function ($scope, register){
  	$scope.updateStudent = function(){
  		register.update({email: $scope.email});
  	};
  })
  .controller('StudentDeleteCtrl', function ($scope, register){
  	$scope.deleteStudent = function(){
  		register.remove({email: $scope.email});
  	};
  });
