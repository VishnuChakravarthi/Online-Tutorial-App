'use strict';

app.controller('StudentNavigateCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {
  	$scope.viewStudHome = function(){
      $location.path("/home");
    }
    $scope.viewStudTopic = function(){
      $location.path("/topic");
    }
    $scope.viewStudTest = function(){
      $location.path("/question");
    }
    $scope.viewStudProfile = function(){
      $location.path("/test");
    }
    $scope.viewStudPerformance = function(){
      $location.path("/student");
    }
  }
  ]);