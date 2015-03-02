'use strict';

app.controller('RegisterController', function ($scope, Student){
	$scope.students = Student.query(); //fetch all students

	$scope.deleteStudent = function(student) {
		student.$remove();
	};
});

app.controller('StudentCreateController', function ($scope, $state, $stateParams, $window, RegisterService){
	$scope.email = null;

	$scope.addStudent = function(){
		RegisterService.save({email: $scope.email});
	};
});

app.controller('StudentEditController', function ($scope, $state, $window){
	$scope.updateStudent = function(){
		$scope.student.$update(function() {
			 $window.location.href = '/'; //redirect to home
		});
	};
});

app.controller('StudentSaveController', function ($scope, RegisterService, $resource){
	$scope.email = RegisterService.get({email:$scope.email});
	if ($resource('http://umx.cloudapp.net//#/registration/confirm/:email')){
			RegisterService.update({email: $scope.email});
	}
	else if($resource('http://umx.cloudapp.net//#/registration/cancel/:email')){
			RegisterService.remove({email: $scope.email});
	}
});
