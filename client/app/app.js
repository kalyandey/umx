'use strict';

var app = angular.module('umxApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'mm.foundation',
  'matchmedia-ng',
  'satellizer',
  'ngFileUpload'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
}).run(function ($state,$rootScope) {
  $rootScope.$state = $state;
});

app.factory('Global', function(){
   var log = '';
   return {
     log: function() { return log; },
     setLog: function(newLog) { log = newLog; }     
   };
 });

app.run( function($rootScope, $location,$window,$http,Global) {
  // register listener to watch route changes
    $rootScope.$on( "$stateChangeStart", function(event, next, current) {        
        console.log('route change');
        $http({
	  url:"loginCheck",
	  method:'post'
	  }).success(function(res){
		if(res=='0'){
		  Global.setLog('');
		  //$location.path('/login');
		}
		else if(res=='1'){
		  Global.setLog('1');
		  //$location.path('/login');
		}
	  });
    });
});
