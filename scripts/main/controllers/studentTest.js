'use strict';

app.controller('StudentTestCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {
  	

  	$scope.stuTestInit = function(){
  		 $('.datepicker').datepicker();
  	}
  }])
