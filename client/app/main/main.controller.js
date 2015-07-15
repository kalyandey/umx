'use strict';

app = angular.module('umxApp');
app.controller('MainCtrl', function ($scope, $modal, matchmedia,$http , $location, Global) {

  //$scope.email = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
  if (Global.log() == '') {
	$location.path('/');    
  }else{
    $location.path('/dashboard'); 
  }
  $scope.msg = '';
  $scope.login_msg = '';
  $scope.user_name = '';
  
  $scope.signUp =  function(){

	$http({
	  url:"activation",
	  method:'post',
	  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  data:'email='+$scope.signup_email,
	  }).success(function(res){
		$scope.msg = res;
	  });
    };
    
   //$scope.userinfo =  function(){

	$http({
	  url:"userinfo",
	  method:'post',
	  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	  data:'',
	  }).success(function(res){
          res = res[0];
            //console.log(res);
	    $scope.user_name = res.name;
	  });
    //};
    
    
  $scope.loginM = function(){          
 //$location.path("#/ss");
	  $http({
	    url:"login",
	    method:'post',
	    headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	    data:'email='+ $scope.login_email + '&password=' + $scope.login_password,
	    }).success(function(res){
                //console.log(res);	  	
                if (res == '0') {
                  $scope.login_msg = 'Invalid Username or Password';
                }
                else
                {
                  window.location = "/dashboard" ; 
                  
                }
               
               
	  });
	  
	}
        
  $scope.signOut = function(){
      $http({
            url:"logout",
            method:'post',
            headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
            data:'',
            }).success(function(res){
              if (res == 1) {
                window.location = '/';
              }
            });
  }

  matchmedia.onPhone(function (mediaQueryList) {
    $scope.phone = matchmedia.isPhone();
    if ($scope.phone) {
      $scope.mobileViewClass = 'out';
      $scope.signIn = function () {
        $scope.mobileViewClass = 'bounceInDown';
      };
      $scope.closeSignIn = function () {
        $scope.mobileViewClass = 'out bounceOutUp';
      };
    }
  });

  matchmedia.onDesktop(function (mediaQueryList) {
    $scope.desktop = matchmedia.isDesktop();
    $scope.tablet = matchmedia.isTablet();
    if ($scope.desktop || $scope.tablet) {
      $scope.signIn = function () {
        $scope.signInToggle = 'expanded';
      };
      $scope.closeSignIn = function () {
        $scope.signInToggle = '';
      };
    }
  });

  $scope.openModal = function () {
    $modal.open({
      templateUrl: 'TermsModal.html',
      controller: 'ModalCtrl'
    });
  };
});

//  
//   app.controller('loginCtrl', function ($scope,  $http, $state){
//   
//	$scope.loginMethod = function(){          
//	 
//	  alert($scope.login_email123);
//	  alert($scope.login_password);
//	  //$http({
//	  //  url:"login",
//	  //  method:'post',
//	  //  headers   : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
//	  //  data:'email='+ $scope.login_email + '&password = ' + $scope.login_password,
//	  //  }).success(function(res){
//	  //	$scope.login_password = res;
//	  //});
//	  
//	}
//	
//  });

