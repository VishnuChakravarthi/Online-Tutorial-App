'use strict';

app.controller('AdminViewProductCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route','localStorageService',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,localStorageService) {

    $scope.adminViewProdInit = function(){
      $scope.type = 'tshirt';
      var postData = {
        'action' : 'getFile',
        'tableName' : $scope.type
      }

      $log.debug(postData);
      $http({
        method  : 'POST',
        url     : "php/viewProduct.php",
        data    : postData, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (data) {     
        // $scope.arr = data);
          $scope.arr = data;
          // $log.debug(data);
      }).error(function (error) {
         $log.debug(error);
      });

    }

    $scope.save = function(products){
      $log.debug('keyword');
      $log.debug(products);

      var postData = {
        'action' : 'updateProducts',
        'tableName' : 'tshirt',
        'id' : products.id,
        'name' : products.name,
        'size' : products.size,
        'color' : products.color,
        'material' : products.material,
        'price' : products.Price,
        'desc' : products.description
      }

      $log.debug(postData);
      $.ajax({
        type: 'POST',
        data: postData,
        url: "php/updateProduct.php",
        crossDomain: true,
        cache: false,
        success : function(responseText){
            // $('#loading').hide();
          $log.debug(responseText);
          if (responseText == 1){
            alert('File updated successfully');
            $window.location.reload();
            // $route.reload();
          } else {
            alert('File not updated');
          }
        },
        error: function(e){
          $log.debug(e);
        }
      });
    }

    $scope.upld_image = function(prod_id){
      localStorageService.set('prod_id', prod_id);
    }

    $scope.uploadFile = function(files) {
    // $scope.type = $scope.product_type.toLowerCase();
    // var prod_id = document.getElementById("prod_id_{{products.id}}").innerHTML;
    var prod_id = localStorageService.get('prod_id');
    $log.debug(prod_id);
    var postData = {
        'action' : 'updateImage',
        'tableName' : "tshirt",
        'id' : prod_id,
        'file' :files[0]
      }

      $log.debug(postData);
    $.ajax({
        type: 'POST',
        data: postData,
        url: "php/updateProduct.php",
        crossDomain: true,
        cache: false,
        success : function(responseText){
            // $('#loading').hide();
          $log.debug(responseText);
          if (responseText == 1){
            alert('File updated successfully');
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

    $scope.delete = function(products){
      $log.debug('delete');
      $log.debug(products);
      var postData = {
        'action' : 'deleteProducts',
        'tableName' : 'tshirt',
        'id' : products.id
      }

      $log.debug(postData);
      $.ajax({
        type: 'POST',
        data: postData,
        url: "php/deleteProduct.php",
        crossDomain: true,
        cache: false,
        success : function(responseText){
            // $('#loading').hide();
          $log.debug(responseText);
          if (responseText == 1){
            alert('File deleted successfully');
            $route.reload();
          } else {
            alert('File not deleted');
          }
        },
        error: function(e){
          $log.debug(e);
        }
      });
    }
  }])