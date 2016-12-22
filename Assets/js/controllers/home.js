angular.module('app.controllers',[]).controller('homeCntrl', function($scope, $timeout){
  console.log('home ctrl');
  
  $scope.init = function(){
    console.log('home init');
    $scope.menuActive = false;
	$scope.containerDeactive = false;
	//$timeout(function(){$scope.$parent.notiText = "Home Page Noti"},0);
  }
  $scope.init();
})