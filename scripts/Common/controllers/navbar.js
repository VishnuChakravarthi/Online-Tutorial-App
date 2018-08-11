'use strict';

app.controller('NavbarCtrlr',['$scope','$rootScope','$log','$http','$window','$controller','$location','$route',
  function ($scope,$rootScope,$log,$http,$window,$controller,$location,$route) {

//   	function sticky_relocate() {
//     var window_top = $(window).scrollTop();
//     var div_top = $('#sticky_anchor').offset().top;
//     if (window_top > div_top) {
//         $('#sticky').addClass('stick');
//         $('#sticky_anchor').height($('#sticky').outerHeight());
//     } else {
//         $('#sticky').removeClass('stick');
//         $('#sticky_anchor').height(0);
//     }
// }

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky_head').offset().top;
    if (window_top > div_top) {
        $('#sticky_header').removeClass('header_strink');
        $('#sticky_header').addClass('header_anime');
        $('#sticky_head').height(0);
    } else {
        $('#sticky_header').addClass('header_strink');
        $('#sticky_header').addClass('header_anime');
        $('#sticky_head').height($('#sticky_header').outerHeight());
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

$scope.signOut = function(){
        $location.path("/admin");
        }


  }])