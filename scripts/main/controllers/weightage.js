'use strict';

app.controller('TopicWeightageCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route', 'localStorageService',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,localStorageService) {


  	$scope.weightageInit = function(){
      // $('.modal').modal({ dismissible: false});
      // $("#slide-out").sidenav();
      // $("#selectedtpc").formSelect();
      // $("#selectedDocType").formSelect();
  		var postData = {
        'action' : 'getTopicList',
        'tableName' : 'topiccode'
      }

      $log.debug(postData);
      $http({
        method  : 'POST',
        url     : "php/getTopicList.php",
        data    : postData, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (data) {     
        // $scope.arr = data);
          $scope.topicArray = data;
          console.log($scope.topicArray);
      }).error(function (error) {
         console.log(error);
      });

      
  	}


  	$scope.mock = function(test){
  		$scope.mockTest = true;
  		$scope.test = test;
  		console.log($scope.test);
  	}

  	$scope.showWeightagetab = function(tpCode,tpName){
  		$scope.weightTab = true;
  		$scope.topicName = tpName;
  		$scope.topicCode = tpCode;
  		console.log(tpName);

      var postData2 = {
        'action' : 'getTotalWeightage',
        'tableName' : 'testweightage',
        'column' : $scope.test
      }

      $log.debug(postData2);
      $http({
        method  : 'POST',
        url     : "php/adminAddWeightage.php",
        data    : postData2, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (data) {     
        // $scope.arr = data);
          // $scope.topicArray = data;
          // $scope.easy;
              $scope.countWeight = 0;
          console.log(data);

          angular.forEach(data, function(value, key) {
              console.log($scope.test);
            if($scope.test == 'MockTest1') {
              $scope.val = value.MockTest1;
            }else if($scope.test == 'MockTest2') {
              $scope.val = value.MockTest2;
            }else if($scope.test == 'MockTest3') {
              $scope.val = value.MockTest3;
            }else if($scope.test == 'MockTest4') {
              $scope.val = value.MockTest4;
            }else if($scope.test == 'MockTest5') {
              $scope.val = value.MockTest5;
            }
            if(value.TopicCode == tpCode){
              $scope.weightVal = JSON.parse($scope.val);
            }
            // console.log(JSON.parse($scope.val));
            $scope.mock = JSON.parse($scope.val);
            angular.forEach($scope.mock, function(value, key) {
              $scope.countWeight += parseInt(value);
            })
          });
              console.log($scope.countWeight);
      }).error(function (error) {
         console.log(error);
      });

  	}


      // $scope.showCounts = function () {
      //       console.log('oldValue = ' + $scope.oldValue);
      //       console.log('newValue = ' + $scope.weightVal.easy);
      //   }


    // $scope.countDetect = function(count){
    //   // $scope.ec = $('#easyField').val();
    //   // $scope.med = $('#medField').val();
    //   // $scope.hard = $('#hardField').val();
    //   // $scope.mc = $('#mCField').val();
    //   console.log(count);
    //   // console.log('oldValuesads=' + $('#easyField').val());
      
    //   $scope.easyDiff = $('#easyField').val() - $scope.oldValueEasy;
    //   $scope.medDiff = $('#medField').val() - $scope.oldValueMed;
    //   $scope.hardDiff = $('#hardField').val() - $scope.oldValueHard;
    //   $scope.masterDiff = $('#mCField').val() - $scope.oldValueMaster;
    //   console.log($scope.easyDiff);
    //   console.log($scope.medDiff);
    //   console.log($scope.hardDiff);
    //   console.log($scope.masterDiff);
    //   console.log($scope.easyDiff+$scope.medDiff+$scope.hardDiff+$scope.masterDiff);
    //   if($scope.ec == $('#easyField').val()){
    //   }
    // }

    $('#easyField').on('input', function() {
      
      $scope.showWeight = true;
      $scope.easyDiff = $scope.oldValueEasy - $('#easyField').val() ;
      console.log($scope.easyDiff);
      // $scope.totalWeight = $scope.countWeight;
      console.log($scope.countWeight - $scope.easyDiff);
      $scope.countWeig = $scope.countWeight - $scope.easyDiff;
    });
    $("#easyField").blur(function(){
      $scope.countWeight = $scope.countWeig;
      if($scope.countWeight > 45){
        $('.countValueHtml').attr('style', 'background-color : red');
      }
    });
    $('#mCField').on('input', function() {
       if($scope.countWeight > 45){
        $('.countValueHtml').attr('style', 'background-color : red');
      }
      $scope.showWeight = true;
      $scope.mcDiff = $scope.oldValueMaster - $('#mCField').val() ;
      console.log($scope.mcDiff);
      // $scope.totalWeight = $scope.countWeight;
      console.log($scope.countWeight - $scope.mcDiff);
      $scope.countWeig = $scope.countWeight - $scope.mcDiff;
    });
    $("#mCField").blur(function(){
      $scope.countWeight = $scope.countWeig;
    });
    $('#medField').on('input', function() {
        if($scope.countWeight > 45){
        $('.countValueHtml').attr('style', 'background-color : red');
      }
      $scope.showWeight = true;
      $scope.medDiff = $scope.oldValueMed - $('#medField').val() ;
      console.log($scope.medDiff);
      // $scope.totalWeight = $scope.countWeight;
      console.log($scope.countWeight - $scope.medDiff);
      $scope.countWeig = $scope.countWeight - $scope.medDiff;
    });
    $("#medField").blur(function(){
      $scope.countWeight = $scope.countWeig;
    });
    $('#hardField').on('input', function() {
      if($scope.countWeight > 45){
        $('.countValueHtml').attr('style', 'background-color : red');
      }
      $scope.showWeight = true;
      $scope.hardDiff = $scope.oldValueHard - $('#hardField').val() ;
      console.log($scope.hardDiff);
      // $scope.totalWeight = $scope.countWeight;
      console.log($scope.countWeight - $scope.hardDiff);
      $scope.countWeig = $scope.countWeight - $scope.hardDiff;
    });
    $("#hardField").blur(function(){
      $scope.countWeight = $scope.countWeig;
    });

  	$scope.addWeightage = function(tpCode){
      if($scope.countWeight <= 45){
        console.log($scope.test);
      $scope.ec = $('#easyField').val();
      $scope.med = $('#medField').val();
      $scope.hard = $('#hardField').val();
      $scope.mc = $('#mCField').val();

      var postData = {
        'action' : "addWeightage",
        'tableName' : "testWeightage",
        'ec' : $scope.ec,
        'med' : $scope.med,
        'hard' : $scope.hard,
        'mc' : $scope.mc,
        'test' : $scope.test,
        'topicCode' : tpCode
      }
      console.log(postData);

      $http({
        method  : 'POST',
        url     : "php/adminAddWeightage.php",
        data    : postData, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (data) {     
        // $scope.arr = data);
          // $scope.arr = data;
          console.log(data);
          if(data == 1){
            alert("Weightage added successfully");
          }else{
            alert("Weightage not added");
          }
      }).error(function (error) {
         console.log(error);
      });

      }else{
        $('.countValueHtml').attr('style', 'background-color : red');
      alert('Weightage is more than 45 which is not allowed');
    }
  	}

  }])