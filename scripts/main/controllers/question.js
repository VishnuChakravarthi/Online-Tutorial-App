'use strict';

app.controller('QuestionCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {

  	$scope.quesInit = function(){
      
      $('.modal').modal({ dismissible: false});
  		$("#slide-out").sidenav();
  		$("#selectedTest").formSelect();
  		$("#selectDiff").formSelect();
      $("#selectedTopic").formSelect();
      $("#selectedLevel").formSelect();
      $("#levelCreateQues").formSelect();
      // $("#optionValue").formSelect();
  		$scope.showQues = false;

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

$scope.optionType = function(v){
 // console.log(v);
 // $scope.optionToF = false;
 // console.log($('#optionValue').val());
   if(v == 'Mutiple_type'){
    $scope.optionToF = false;
    $scope.optionAns = true;

  }else if(v == 'ToF'){
    $scope.optionAns = false;
    $scope.optionToF = true;
  }
}

$scope.showQuestiontab = function(){
    	$scope.showQuesTab1 = true;
      $scope.createQuesBtn = true;
      $scope.showQuesTab = true;
      $scope.createQuesTab = false;
      // console.log($scope.w);
  	};

  	$scope.showQuestions = function(){

    	$scope.showQues = true;
      // console.log(e);
    //  option = $scope.select;
    
    // switch (option) {
    //   case '0':
    //     alert('Select an option to view questions');
    //     //$location.url('/#en');
    //     break;
    //   case '1':
    //     alert('easy');
    //     //$location.url('/#de');
    //     break;
    //   case '2':
    //     alert('medium');
    //     //$location.url('/#it');
    //     break;
    //   case '3':
    //     alert('hard');
    //     //$location.url('/#fr');
    //     break;
    //   case '4':
    //     alert('master class');
    //     //$location.url('/#es');
    //     break;
    //   default:
    //     alert('0');
    //     //$location.url('/#en');
    // }
    //$translate.use(langKey);
  	};

    $scope.viewQues = function(){
       
       console.log("modal");
    }

    $scope.editQuestion = function(){
       
       // console.log("edit");
       $scope.editQues = true;
       var textarea = document.getElementById('textarea2');
        sceditor.create(textarea, {
            format: 'xhtml',
            style: '../lib/text-editor/minified/themes/content/default.min.css'
        });
    }
    
$scope.closeQues = function(){
       
       // console.log("close");
       $scope.editQues = false;
    }


$scope.createQues = function(){
      $scope.showQuesTab1 = true;
       $scope.showQuesTab = false;
       $scope.createQuesTab = true;
       $scope.createQuesBtn = true;
       console.log("create");

    }

$scope.reset = function(){

       console.log("create");
    }

$scope.createQuesSubmit = function(){
    console.log($('#textarea1').val());
    $scope.question = $('#textarea1').val();
    $scope.difficulty = $('#levelCreateQues').val();
    if('#multiple_Type' == true){
      $scope.option1 = $('#optionCreate1').val();
      $scope.option2 = $('#optionCreate2').val();
      $scope.option3 = $('#optionCreate3').val();
      $scope.option4 = $('#optionCreate4').val();
    }else if('#ToF' == true){
      $('input[name=ToF]:checked').val();
    }

var postData = {
        'action' : 'createQuestion',
        'tableName' : 'questionpool',

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



  // $('#editor').wysiwyg().on('change', function(){
// });
  }


  }])