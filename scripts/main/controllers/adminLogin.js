'use strict';

app.controller('AdminLoginCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route','localStorageService',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,localStorageService) {

    $scope.adminLoginInit = function(){
      localStorage.clear();
    }

  	$scope.adminLogin = function(){
  		
  		// console.log(name);
  		// console.log(password);
  		// alert('clicked');
  		var postData = {
        'action' : 'adminLogin',
        'tableName' : 'user_admin',
        'email' : $scope.email,
        'password' : CryptoJS.HmacSHA1($scope.email, $scope.password)
      }
      var secret = 'secret';
$scope.ww = CryptoJS.HmacSHA1($scope.email, secret)
      console.log(postData);
console.log(CryptoJS.enc.Base64.stringify($scope.ww));
      // $http({
      //   method : "POST",
      //   url : "php/adminLogin.php",
      //   data : postData,
      //   headers : {'Content-Type': 'application/x-www-form-urlencoded'}
      // }).success(function(data){
      //   console.log(data);
      // }).error(function(e){
      //   console.log(e);
      // })
  	}
  }])