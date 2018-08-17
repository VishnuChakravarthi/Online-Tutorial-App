'use strict';

app.controller('StudentDetailCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route', '$timeout', 'localStorageService',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,$timeout, localStorageService) {

    $scope.studentType = ["Regular","Short Term"];
    $scope.sex = ["Male","Female", "Others"];
    $scope.studentStatus = ["Activate","Deactivate"];
    $scope.saveArr = [];


    $scope.stuDetInit = function(){
      $("#slide-out").sidenav();
      $("#selectStudType").formSelect();
      $("#selectStudType1").formSelect();
      $("#selectSex").formSelect();
      $("#selectStudStatus").formSelect();
      $('.datepicker').datepicker();
      Materialize.updateTextFields();
   var postData = {
        'action' : 'getStudentName',
        'tableName' : 'studentlist'
      }

      $log.debug(postData);
      $http({
        method  : 'POST',
        url     : "php/getStudentName.php",
        data    : postData, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (data) {     
        // $scope.arr = data);
          $scope.arr = data;
          console.log($scope.arr);
      }).error(function (error) {
         console.log(error);
      });
    }

   //  this.$onChanges = function () {
   //    setTimeout(function(){
   //      // $('#selectSex1').val("1");

   //      $('#selectSex1').material_select();
   //    },0);
   // };

    // $('#selectSex1').on('contentChanged', function() {
    //   $(this).formSelect();
    // });


  $scope.editKeyword = function(sd){
    console.log(sd);
    $scope.editBtn = true;
     $timeout(function () {
            $('select').material_select()
         });
  }

     

  	$scope.activateStudent = function(id){
      var result = confirm("Do u want to activate the account?");
      if (result) {
        var postData = {
        'action' : 'activateStudent',
        'tableName' : 'studentlist',
        'id' : id
      }

      console.log(postData);
      // $http({
      //   method  : 'POST',
      //   url     : "php/getStudentDetail.php",
      //   data    : postData, 
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      //   // headers : {'Content-Type':'application/json'} 
      // }).success(function (data) {     
      //   // $scope.arr = data);
      //     $scope.stuDet = data;
      //     $scope.ses_start = new Date(data[0].session_start);
      //     $scope.ses_end = new Date(data[0].session_end);
      //     $scope.dob = new Date(data[0].dob);
      //     console.log(data[0].sex);

      //     $('#selectSex1').val("3");
      //     // $('#selectStudType1').formSelect();
      //     console.log(data);
      // }).error(function (error) {
      //    console.log(error);
      // });
}
}

    $scope.deactivateStudent = function(){
      alert("no");
    }

    $scope.show = false;

  	$scope.showDet = function(id){
      console.log(id);
    	
    	$scope.show = true;
      $scope.show1 = true;
      $scope.createStudBtn = false;
      $scope.addStud = false;

      var postData = {
        'action' : 'getStudentDetail',
        'tableName' : 'studentlist',
        'id' : id
      }

      console.log(postData);
      $http({
        method  : 'POST',
        url     : "php/getStudentDetail.php",
        data    : postData, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (data) {     
        // $scope.arr = data);
          $scope.stuDet = data;
          $scope.ses_start = new Date(data[0].session_start);
          $scope.ses_end = new Date(data[0].session_end);
          $scope.dob = new Date(data[0].dob);
          console.log($scope.ses_end);

          // $('#selectSex1').val("3");
          // $('#selectStudType1').formSelect();
          console.log(data);
      }).error(function (error) {
         console.log(error);
      });

  	};

    $scope.createStudent = function(){
      $scope.createStudBtn = true;
      $scope.show = false;
      $scope.show1 = true;
      $scope.addStud = true;
       $("#slide-out").sidenav();
      $("#selectStudType").formSelect();
      $("#selectStudStatus").formSelect();
      $("#selectSex").formSelect();

    };

    $timeout(function() {
      $scope.uploadFile = function(files) {
      console.log(files);
    // $scope.type = $scope.product_type.toLowerCase();
   
    // $scope.date_created = new Date();
    console.log(localStorageService.get('tag'));
    $scope.tag = localStorageService.get('tag');
    $scope.stud_det = localStorageService.get('stud_det');

    console.log("saasdsa" + $scope.stud_det); 


    if($scope.tag == "add"){
      // $scope.action = 'addStudent';
       console.log($('#selectStudType').val());
      $scope.sex = $('#selectSex').val();
      $scope.dob = $('#dobAdd').val();
      $scope.sesStart = $('#startDateAdd').val();
      $scope.sesEnd = $('#endSesAdd').val();
      $scope.studType = $('#selectStudType').val();
      $scope.studStatus = $('#selectStudStatus').val();

      var postData = {
        'action' : 'addStudent',
        'tableName' : 'studentList',
        'photo' : files[0],
        'phoName' : files[1],
        'first_name' : $scope.firstName,
        'last_name' : $scope.lastName,
        'sex' : $scope.sex,
        'dob' : $scope.dob,
        'email_id' : $scope.emailId,
        'user_id' : $scope.userId,
        'course' : $scope.course,
        'ses_start' : $scope.sesStart,
        'ses_end' : $scope.sesEnd,
        'student_type' : $scope.studType,
        'student_status' : $scope.studStatus
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
    }else if($scope.tag == "save"){
      // $scope.action = 'updateStudent';
      console.log($scope.saveArr);
      if(files == undefined){
        $scope.photo = $scope.stud_det.photo;
        $scope.photo_name = $scope.stud_det.photo_name;
      }else{
        $scope.photo = files[0];
        $scope.photo_name = files[1];
      }
    // $scope.date_created = new Date();
    var postData = {
        'action' : 'updateStudent',
        'tableName' : 'studentList',
        'id' : $scope.stud_det.id,
        'photo' : $scope.photo,
        'phoName' : $scope.photo_name,
        'first_name' : $scope.stud_det.first_name,
        'last_name' : $scope.stud_det.last_name,
        'sex' : $scope.saveArr[0].sex,
        'dob' : $scope.saveArr[0].dob,
        'email_id' : $scope.stud_det.email_id,
        'user_id' : $scope.stud_det.user_id,
        'course' : $scope.stud_det.course,
        'ses_start' : $scope.saveArr[0].ses_start,
        'ses_end' : $scope.saveArr[0].ses_end,
        'student_type' : $scope.saveArr[0].student_type,
        'student_status' : $scope.saveArr[0].student_status
      }

      console.log(postData);
    $.ajax({
        type: 'POST',
        data: postData,
        url: "php/adminUpdateStudent.php",
        crossDomain: true,
        cache: false,
        success : function(responseText){
            // $('#loading').hide();
          console.log(responseText);
          if (responseText == 1){
            alert('File uploaded successfully');
          } else {
            alert('File not uploaded');
          }
        },
        error: function(e){
          console.log(e);
        }
      });
    }
    
            $route.reload();

    };
  }, 2000);


$scope.addStudent = function(tag){
  localStorageService.set('tag', tag);
  // localStorageService.set('id', id);
}

$scope.saveDetails = function(sd, tag){
  console.log(tag);
  console.log(sd);
  
  localStorageService.set('tag', tag);
  localStorageService.set('stud_det', sd);
  console.log($('#selectOpt').val());
    $scope.sex = $('#selectSex1').val();
    $scope.dob = $('#dobEdit').val();
    $scope.sesStart = $('#sesStartEdit').val();
    $scope.sesEnd = $('#sesEndEdit').val();
    $scope.studType = $('#selectOpt').val();
    $scope.studStatus = $('#StudStatusEdit').val();
    $scope.photo = $('')
     var postData = {
        'sex' : $scope.sex,
        'dob' : $scope.dob,
        'ses_start' : $scope.sesStart,
        'ses_end' : $scope.sesEnd,
        'student_type' : $scope.studType,
        'student_status' : $scope.studStatus
      }
    $scope.saveArr.push(postData)
    // console.log($scope.saveArr);
  $scope.uploadFile();
  // $scope.uploadFile(files);
    // console.log($('#selectOpt').val());
    // $scope.sex = $('#selectSex1').val();
    // $scope.dob = $('#dobEdit').val();
    // $scope.sesStart = $('#sesStartEdit').val();
    // $scope.sesEnd = $('#sesEndEdit').val();
    // $scope.studType = $('#selectOpt').val();
    // $scope.studStatus = $('#StudStatusEdit').val();
    // // $scope.date_created = new Date();
    // var postData = {
    //     'action' : 'updateStudent',
    //     'tableName' : 'studentList',
    //     'id' : sd.id,
    //     'first_name' : sd.first_name,
    //     'last_name' : sd.last_name,
    //     'sex' : $scope.sex,
    //     'dob' : $scope.dob,
    //     'email_id' : sd.email_id,
    //     'user_id' : sd.user_id,
    //     'course' : sd.course,
    //     'ses_start' : $scope.sesStart,
    //     'ses_end' : $scope.sesEnd,
    //     'student_type' : $scope.studType,
    //     'student_status' : $scope.studStatus
    //   }

    //   console.log(postData);
    // $.ajax({
    //     type: 'POST',
    //     data: postData,
    //     url: "php/adminUpdateStudent.php",
    //     crossDomain: true,
    //     cache: false,
    //     success : function(responseText){
    //         // $('#loading').hide();
    //       console.log(responseText);
    //       if (responseText == 1){
    //         alert('File uploaded successfully');
    //       } else {
    //         alert('File not uploaded');
    //       }
    //     },
    //     error: function(e){
    //       console.log(e);
    //     }
    //   });
    //         $route.reload();
  }


$scope.deleteStudent = function(sd){
  $log.debug('delete');
      $log.debug(sd);
      var postData = {
        'action' : 'deleteStudent',
        'tableName' : 'studentlist',
        'id' : sd.id
      }

      $log.debug(postData);
      $.ajax({
        type: 'POST',
        data: postData,
        url: "php/adminDeleteStudent.php",
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