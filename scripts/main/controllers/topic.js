'use strict';

app.controller('TopicCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route', 'localStorageService',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,localStorageService) {

  	$scope.topicInit = function(){
      $('.modal').modal({ dismissible: false});
      $("#slide-out").sidenav();
      $("#selectedtpc").formSelect();
      $("#selectedDocType").formSelect();
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

$scope.editTopicContent = function(){
       
       // console.log("edit");
       $scope.editContent = true;
    }

    $scope.createTopic = function(){
      $scope.viewTopic = false;
      $scope.createTopicBtn = false;
      $scope.showTopicTab1 = true;
      $scope.createTopicTab = true;
    }

    $scope.showTopictab = function(){
      $scope.createTopicBtn = false;
      $scope.viewTopic = true;
      $scope.showTopicTab1 = true;
      $scope.createTopicTab = false;
    };

    $scope.showUploadZone = function(){

      $scope.drop = true;
    }

    $scope.cancelTopic = function(){
      $scope.createTopicBtn = false;
      $scope.viewTopic = false;
      $scope.showTopicTab1 = false;
      $scope.createTopicTab = false;
      // $scope.viewTopic = false;
      // $scope.createTopicBtn = false;
      // $scope.showTopicTab1 = true;
      // $scope.createTopicTab = true;
    }

  }])