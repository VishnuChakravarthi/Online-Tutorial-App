'use strict';

app.controller('QuestionCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route','$filter',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route,$filter) {

    $scope.quesArr = [];
    $scope.uniqueQues = [];
    // $scope.optionsArr = [
    //   {val : 'A',name: 'Option A'},
    //   {val : 'B',name: 'Option B'},
    //   {val : 'C',name: 'Option C'},
    //   {val : 'D',name: 'Option D'}
    // ];

  	$scope.quesInit = function(){
      $('[data-toggle="tooltip"]').tooltip();
      // $('.modal').modal({ dismissible: false});
  		$("#slide-out").sidenav();
  		$("#selectedTest").formSelect();
  		// $("#selectDiff").formSelect();
      $("#selectedTopic").formSelect();
      // $("#selectedLevel").formSelect();
      $("#levelCreateQues").formSelect();
      $("#QuesType").formSelect();
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
   if(v == 'Mutiple_choice'){
    $scope.optionToF = false;
    $scope.optionAns = true;

  }else if(v == 'ToF'){
    $scope.optionAns = false;
    $scope.optionToF = true;
  }
}



$scope.showQuestiontab = function(topicname, topiccode){
  // console.log(topiccode);
  $scope.select = "";
    	$scope.showQuesTab1 = true;
      $scope.createQuesBtn = true;
      $scope.showQuesTab = true;
      $scope.createQuesTab = false;
      $scope.viewAns = false;
      $scope.editQues = false;
      console.log(topicname);
      $scope.topicName = topicname;
      $scope.topicCode = topiccode;
      console.log($scope.topicCode);

      var postData = {
        'action' : 'getQuestionList',
        'tableName' : 'questionpool',
        'topicCode' : $scope.topicCode
      }

      console.log(postData);
      $http({
        method  : 'POST',
        url     : "php/getQuestions.php",
        data    : postData, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (data) {     
        // $scope.arr = data);
          $scope.quesArr = data;
          console.log($scope.quesArr);
      }).error(function (error) {
         console.log(error);
      });
  	};

  	$scope.showQuestions = function(){

    	$scope.showQues = true;
      // $scope.filter = $('#selectDiff').val();
      console.log($scope.select);
  	};

    $scope.viewQues = function(qId){
       $scope.showQuesTab = false;
       $scope.viewAns =true;
       console.log(qId);
       $scope.uniqueQues = $filter('filter')($scope.quesArr, {QusId: qId})[0];
       // if($scope.uniqueQues.)
        if($scope.uniqueQues.QusRating == 1) {
              $scope.rat = "Easy";
            }else if($scope.uniqueQues.QusRating == 2){
              $scope.rat = "Medium";
            }else if($scope.uniqueQues.QusRating == 3){
              $scope.rat = "Hard";
            }else if($scope.uniqueQues.QusRating == 4){
              $scope.rat = "Master Class";
            }else{
               $scope.rat = "Not Defined";
            }

            if($scope.uniqueQues.ansType == 1) {
              $scope.ans = "Multiple Choice";
            }else if($scope.uniqueQues.ansType == 2){
              $scope.ans = "Multiple Answer";
            }else{
               $scope.ans = "Not Defined";
            }
        $('#ans'+$scope.uniqueQues.QusSolution).css({
          "background-color":"rgba(255, 0, 0, 0.71)",
          "color" : "white"
        });
      //         break;
      //     case 2:
      //         $scope.rat = "Medium";
      //         break;
      //     case 3:
      //         $scope.rat = "Hard";
      //         break;
      //     case 4:
      //         $scope.rat = "Master Class";
      //         break;
      //     default:
      //         $scope.rat = "";
      // }
      console.log($scope.uniqueQues.QusSolution);
      // console.log($('#ans'+$scope.uniqueQues.QusSolution).css({"background-color":"blue"}));

       // $('.modal').modal({ dismissible: false});
       
    }

    $scope.editQuestion = function(qId){
       $scope.showQuesTab = false;
       $scope.viewAns = false;
       console.log("edit");
       $scope.editQues = true;
       $("#textareaEditdiv .wysiwyg-editor").html($scope.uniqueQues.QusStatement);
       $("#optionEdit1div .wysiwyg-editor").html($scope.uniqueQues.QusOpt1);
       $("#optionEdit2div .wysiwyg-editor").html($scope.uniqueQues.QusOpt2);
       $("#optionEdit3div .wysiwyg-editor").html($scope.uniqueQues.QusOpt3);
       $("#optionEdit4div .wysiwyg-editor").html($scope.uniqueQues.QusOpt4);
       $("#quesExplndiv .wysiwyg-editor").html($scope.uniqueQues.QusSolutionExpln);
       // for(var i =0; i<=$scope.uniqueQues.QusSolution.length; i++){
       console.log($scope.uniqueQues.QusSolution);
       if($scope.uniqueQues.ansType == 1){
          $("input.checkOpt[value='" + $scope.uniqueQues.QusSolution + "']").prop('checked', true);
       }else if($scope.uniqueQues.ansType == 2){
        console.log(2);
        $("input.checkOpt[value='" + $scope.uniqueQues.QusSolution + "']").prop('checked', true);
       }

       // }
        // $scope.selectId = $('#sel ul').attr('id');
        // $('#selectedLevelEdit').val($scope.uniqueQues.QusRating);
       // console.log($scope.selectId+$scope.uniqueQues.QusRating);
       // $( ".select-dropdown" ).remove();
       // $scope.editContent = $filter('filter')($scope.quesArr, {QusId: qId})[0];
       // console.log($("#textareaEdit").val("adFADFA"));
       // var textarea = document.getElementById('textarea2');
       //  sceditor.create(textarea, {
       //      format: 'xhtml',
       //      style: '../lib/text-editor/minified/themes/content/default.min.css'
       //  });
    }
    
$scope.closeQues = function(){
       
       // console.log("close");
       $scope.editQues = false;
       $scope.showQuesTab1 = false;

    }

$scope.updateQues = function(Tc, qId){
  console.log(Tc);
  console.log(qId);
  $scope.correctOption = [];
  // console.log($scope.uniqueQues);
  // if($scope.uniqueQues.QusOpt2 == ""){
  //   $scope.opt2Edited = $('#optionEdit2').val();
  //   console.log('inside');
  // }else{
  $scope.questEdited = $('#textareaEdit').val();
  $scope.opt1Edited = $('#optionEdit1').val();
  $scope.opt2Edited = $('#optionEdit2').val();
  $scope.opt3Edited = $('#optionEdit3').val();
  $scope.opt4Edited = $('#optionEdit4').val();
  $scope.explEdited = $('#explEdit').val();
  $scope.typeOfAns = $('#selectedLevel').val();
  $scope.difficulty = $('#selectedLevelEdit').val();
  $.each($("input[name='updateCheck']:checked"), function(){            
                $scope.correctOption.push($(this).val());
            });
      // $scope.correctOption = $scope.create.value;

      console.log($scope.correctOption);
  // }
  // $('div').('#textareaEditOpt1')
  // $scope.questEdited = $('#'+i).html();
  
  var postData = {
        'action' : 'updateQuestion',
        'tableName' : 'questionpool',
        'quesId' : qId,
        'question' : $scope.questEdited,
        'difficulty' : $scope.difficulty,
        'typeOfAns' : $scope.typeOfAns,
        'option1' : $scope.opt1Edited,
        'option2' : $scope.opt2Edited,
        'option3' : $scope.opt3Edited,
        'option4' : $scope.opt4Edited,
        'correctOption' : $scope.correctOption.toString(),
        'explanation' : $scope.explEdited
      }
  console.log(postData);

  $http({
        method  : 'POST',
        url     : "php/adminUpdateQuestion.php",
        data    : postData, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (data) {     
        // $scope.arr = data);
          // $scope.arr = data;
          console.log(data);
          if(data == 1){
            alert("File updated successfully");
          }else{
            alert("File not updated");
          }
      }).error(function (error) {
         console.log(error);
      });
  // $.ajax({
  //       type: 'POST',
  //       data: postData,
  //       url: "php/adminUpdateQuestions.php",
  //       crossDomain: true,
  //       cache: false,
  //       success : function(responseText){
  //           // $('#loading').hide();
  //         console.log(responseText);
  //         if (responseText == 1){
  //           alert('File uploaded successfully');
  //         } else {
  //           alert('File not uploaded');
  //         }
  //       },
  //       error: function(e){
  //         console.log(e);
  //       }
  //     });
 $route.reload(); 
}

$scope.createQues = function(){
      $scope.showQuesTab1 = true;
       $scope.showQuesTab = false;
       $scope.createQuesTab = true;
       $scope.createQuesBtn = false;
       console.log("create");

    }

$scope.reset = function(t){

       console.log(t);
    }

$scope.createQuesSubmit = function(topiccode){
    console.log(topiccode);
    $scope.correctOption = [];
    $scope.question = $('#textarea1').val();
    $scope.difficulty = $('#levelCreateQues').val();
    // if($scope.optionAns == true){
      $scope.typeOfAns = $('#QuesType').val();
      $scope.option1 = $('#optionCreate1').val();
      $scope.option2 = $('#optionCreate2').val();
      $scope.option3 = $('#optionCreate3').val();
      $scope.option4 = $('#optionCreate4').val();
      $scope.create = $("input[name='createCheck']:checked");
      $.each($("input[name='createCheck']:checked"), function(){            
                $scope.correctOption.push($(this).val());
            });
      // $scope.correctOption = $scope.create.value;

      console.log($scope.correctOption);


      // $scope.ToF = "";
    // }else if($scope.optionToF == true){
    //   $scope.typeOfAns = "ToF";
    //   $scope.correctOption = $('input[name=ToF]:checked').val(); 
    //   $scope.option1 = "";
    //   $scope.option2 = "";
    //   $scope.option3 = "";
    //   $scope.option4 = "";
    // }
    $scope.explanation = $('#explanation1').val();



// console.log($scope.question);
// console.log($scope.difficulty);
// console.log($scope.option1);
// console.log($scope.option2);
// console.log($scope.option3);
// console.log($scope.option4);
// console.log($scope.ToF);
// console.log($scope.correctOption);
// console.log($scope.explanation);

var postData = {
        'action' : 'createQuestions',
        'tableName' : 'questionpool',
        'topiccode' : topiccode,
        'question' : $scope.question,
        'difficulty' : $scope.difficulty,
        'typeOfAns' : $scope.typeOfAns,
        'option1' : $scope.option1,
        'option2' : $scope.option2,
        'option3' : $scope.option3,
        'option4' : $scope.option4,
        // 'ToF' : $scope.ToF,
        'correctOption' : $scope.correctOption.toString(),
        'explanation' : $scope.explanation
      }

      console.log(postData);
      $http({
        method  : 'POST',
        url     : "php/createQuestion.php",
        data    : postData, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // headers : {'Content-Type':'application/json'} 
      }).success(function (responseText) {     
          // $('#loading').hide();
          console.log(responseText);
          if (responseText == 1){
            alert('File uploaded successfully');
          } else {
            alert('File not uploaded');
          }
        }).error(function(e){
          console.log(e);
        })
        $route.reload();
    }



  // $('#editor').wysiwyg().on('change', function(){
// });

// $scope.initModals = function() {
//   console.log('init');
//      // Initialize the modals
// }
  }])