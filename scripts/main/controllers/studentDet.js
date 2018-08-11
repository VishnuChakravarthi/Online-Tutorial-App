'use strict';

app.controller('StudentDetailCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {
    $scope.stuDetInit = function(){
      $("#slide-out").sidenav();
      $("#selectStuType").formSelect();
      $("#selectSex").formSelect();
      $('.datepicker').datepicker();
      Materialize.updateTextFields();
      // $scope.select = {
      //       value: "Option1",
      //       choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
      //   };
   // $('#first_name').updateTextFields();
}


  	$scope.activateStudent = function(){
      alert("ok");
    }

    $scope.deactivateStudent = function(){
      alert("no");
    }

    $scope.show = false;

  	$scope.showDet = function(){
    	// $scope.hide = false;
    	$scope.show = true;
      $scope.show1 = true;
      $scope.createStudBtn = false;
      $scope.addStud = false;
  	};

    $scope.createStudent = function(){
      $scope.createStudBtn = true;
      $scope.show = false;
      $scope.show1 = true;
      $scope.addStud = true;
    };

    $scope.addStudent = function() {
      console.log($('#sta_date').val());
    // $scope.type = $scope.product_type.toLowerCase();
    console.log($('#selectStuType').val());
    $scope.sex = $('#selectSex').val();
    $scope.dob = $('#dob2').val();
    $scope.sesStart = $('#sta_date').val();
    $scope.sesEnd = $('#e_date').val();
    $scope.studType = $('#selectStuType').val()
    $scope.date_created = new Date();
    var postData = {
        'action' : 'addStudent',
        'tableName' : 'studentList',
        'first_name' : $scope.firstName,
        'last_name' : $scope.lastName,
        'sex' : $scope.sex,
        'dob' : $scope.dob,
        'email_id' : $scope.emailId,
        'user_id' : $scope.userId,
        'course' : $scope.course,
        'ses_start' : $scope.sesStart,
        'ses_end' : $scope.sesEnd,
        'student_type' : $scope.studType
      }

      console.log(postData);
    $.ajax({
        type: 'POST',
        data: postData,
        url: "php/adminAddStudent.php",
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
            $route.reload();

    };



  }])