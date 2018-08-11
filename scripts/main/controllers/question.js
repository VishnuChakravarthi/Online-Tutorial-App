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
  		$scope.showQues = false;
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
  }])