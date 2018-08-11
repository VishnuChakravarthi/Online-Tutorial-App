'use strict';

app.controller('AdminAddProductCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {


  $scope.uploadFile = function(files) {
    $scope.type = $scope.product_type.toLowerCase();
    $log.debug($scope.type);
    var postData = {
        'action' : 'uploadFile',
        'tableName' : $scope.type,
        'name' : $scope.product_name,
        'size' : $scope.product_size,
        'color' : $scope.product_color,
        'material' : $scope.product_material,
        'price' : $scope.product_price,
        'desc' : $scope.product_desc,
        'file' :files[0],
        'fileName' : files[1]
      }

      $log.debug(postData);
    $.ajax({
        type: 'POST',
        data: postData,
        url: "php/uploadProduct.php",
        crossDomain: true,
        cache: false,
        success : function(responseText){
            // $('#loading').hide();
          $log.debug(responseText);
          if (responseText == 1){
            alert('File uploaded successfully');
          } else {
            alert('File not uploaded');
          }
        },
        error: function(e){
          $log.debug(e);
        }
      });
            // $route.reload();

    };

    $scope.addNew = function(){
      $window.location.reload();
    }

    $scope.viewAllProducts = function(){
      $location.path("/adminViewProduct");
    }

  }])