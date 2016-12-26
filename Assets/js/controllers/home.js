angular.module('app.controllers',[]).controller('homeCntrl', function($scope, $timeout){
  console.log('home ctrl');
  
  $scope.init = function(){
    console.log('home init');
    $scope.$parent.menuActive = false;
	$scope.$parent.containerDeactive = false ;
	//$scope.$('overlay')[0].style.display="block";
	//$timeout(function(){$scope.$parent.notiText = "Home Page Noti"},0);
  }
  
  $scope.$ = function(className){
     return document.getElementsByClassName(className);
  }
  $scope.init();
})
