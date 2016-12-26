angular.module('app.controllers').controller('templateCntrl', function($scope, $timeout){
console.log(" $scope.closeMenu");
  $scope.notiText = "";
   $scope.loginActive = false;
   $scope.showOverlay = false;
  $scope.closeMenu = function(){
     //open menu is in common.js
      $scope.menuActive = false;
	  $scope.containerDeactive = false;
	 
  }
  
})
