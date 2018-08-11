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
            .when("/question", {
              templateUrl: 'views/question.html', 
              controller:'QuestionCtrlr'
            })
            .when("/student", {
              templateUrl: 'views/studentDet.html',
              controller:'StudentDetailCtrlr'
            })
            .when("/test", {
              templateUrl: 'views/studentTest.html',
              controller:'StudentTestCtrlr'
            })
            .when("/admin", {
              templateUrl: 'views/admin.html',
              controller:'AdminLoginCtrlr'
            })

             .otherwise({ 
              redirectTo: '/home' 
            });

}]);