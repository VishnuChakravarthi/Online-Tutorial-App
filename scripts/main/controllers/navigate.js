'use strict';

app.controller('NavigateCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {
  	$scope.viewHome = function(){
      $location.path("/home");
    }
    $scope.viewTopic = function(){
      $location.path("/topic");
    }
    $scope.viewQuestion = function(){
      $location.path("/question");
    }
    $scope.viewTest = function(){
      $location.path("/test");
    }
    $scope.viewStudent = function(){
      $location.path("/student");
    }
  }
  ]);