'use strict';

app.controller('AdminLoginCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {
  	
  	$scope.adminSignin = function(){
  		var name = $scope.name;
  		var pass = $scope.password;
  		$log.debug(name);
  		$log.debug(pass);
  		// alert('clicked');
  		if(name == "Amitabha Dey" && pass == "12345"){
  			$location.path("/home");
  		}else{
  			alert("Wrong Login");
        $location.path("/admin");
  		}
  	}
  }])