'use strict';

app.controller('StudentNavbarCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route','$cookies','localStorageService',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,$cookies,localStorageService) {

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky_head').offset().top;
    if (window_top > div_top) {
        $('#sticky_header').removeClass('header_strink');
        $('#sticky_header').addClass('header_anime');
        $('#sticky_head').height(0);
    } else {
        $('#sticky_header').addClass('header_strink');
        $('#sticky_header').addClass('header_anime');
        $('#sticky_head').height($('#sticky_header').outerHeight());
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

$scope.adminLogout = function(){
      var postData = {
        'action' : 'logout',
        'tableName' : 'user_admin',
        'id' : $rootScope.loggedUser
        // 'email' : $scope.email,
        // 'password' : CryptoJS.enc.Base64.stringify($scope.pass)
      }

      $http({
        method : "GET",
        url : "php/adminLogin.php",
        params : postData,
        headers : {
          // 'Authorization': 'Basic' + base64_encode("app_key : app_secret"),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data){
        $cookies.remove('LoggedUser');
        localStorage.clear();
        // console.log(data[0].id);
        // $rootScope.loggedUser = null;
        $location.path('/');
      }).error(function(e){
        console.log(e);
      })

    }


  }])