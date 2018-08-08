'use strict';

app.controller('TopicCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route', 'localStorageService',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,localStorageService) {

  	$scope.topicInit = function(){
  		// $scope.type = 'topics';
    //   var postData = {
    //     'action' : 'getFile',
    //     'tableName' : $scope.type
    //   }

    //   $log.debug(postData);
    //   $http({
    //     method  : 'POST',
    //     url     : "php/viewProduct.php",
    //     data    : postData, 
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //     // headers : {'Content-Type':'application/json'} 
    //   }).success(function (data) {     
    //     // $scope.arr = data);
    //       $scope.arr = data;
    //       // $log.debug(data);
    //   }).error(function (error) {
    //      $log.debug(error);
    //   });
  	}

	// $scope.product_det = function(products){
	// 	// alert('clicked');
	// 	$log.debug("products");
	// 	$log.debug(products);
	// 	localStorageService.set('ProdDet', products);
	// 	$location.path("/productDetail");

	// }  	

  $scope.viewHome = function(){
      $location.path("/home");
      console.log("asdf");
    }

  }])