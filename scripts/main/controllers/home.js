'use strict';

app.controller('HomeCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {

    function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky_anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').css('display','block');
        $('#sticky').addClass('stick');
        $('#sticky_anchor').height($('#sticky').outerHeight());
        // $('#sticky_new').css('display','none');
    } else {
        $('#sticky').css('display','none');
        $('#sticky').removeClass('stick');
        $('#sticky_anchor').height(0);
        // $('#sticky_new').show;
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

// $scope.product = function(){
// 	$location.path("/product");
//     $log.debug("right");
	
// }
 
    
  }])