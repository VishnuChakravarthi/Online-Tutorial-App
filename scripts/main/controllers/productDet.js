'use strict';

app.controller('ProductDetCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route','localStorageService',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,localStorageService) {

  	$scope.productDetInit = function(){
  		$scope.detail = localStorageService.get('ProdDet');
		$log.debug('$scope.detnew');
		$log.debug($scope.detail);
  	}

  	$scope.click = function(){
  		alert('clicked');
  	}
  	
  }])