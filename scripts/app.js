'use strict';

var app = angular.module("myExportApp", [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
    ]).config(['$routeProvider','$httpProvider','$locationProvider',
        function ($routeProvider,$httpProvider,$locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider
            .when('/home',{ 
              templateUrl: 'views/home.html', 
              controller:'HomeCtrlr' 
            })
            .when("/topic", {
              templateUrl: 'views/topic.html', 
              controller:'TopicCtrlr' 
            })
            .when("/productDetail", {
              templateUrl: 'views/productDet.html', 
              controller:'ProductDetCtrlr'
            })
            .when("/admin", {
              templateUrl: 'views/admin.html',
              controller:'AdminLoginCtrlr'
            })
            .when("/adminAddProduct", {
              templateUrl: 'views/adminAddProduct.html',
              controller:'AdminAddProductCtrlr'
            })
            .when("/adminViewProduct", {
              templateUrl: 'views/adminViewProduct.html',
              controller:'AdminViewProductCtrlr'
            })

             .otherwise({ 
              redirectTo: '/home' 
            });

}]);