angular.module("app.directive",[]).directive('searchBox', function(){
  return{
    restrict:'E',
    template:'<form ng-submit="getActionBar()" style="padding:0;margin:0;">'
		          +'<input type="text" placeholder="Search Here" ng-model="searchQuery">'
			      +'<i class="search-icon" ng-click="getActionBar()"></i>'
			     +'</form>',
	controller:function($scope, serachService, $state){
	  $scope.searchQuery = serachService.getSearchedQuery();
	  $scope.getActionBar = function(){
	    //call to serachService
		serachService.setSearchedQuery($scope.searchQuery);
		$state.go("template.search");
        $scope.$parent.showOverlay=true;
        $scope.$('action-container')[0].style.bottom=0;
	    return false;
     }
     $scope.actionBarOption = function(){
       $scope.$parent.showOverlay=false;
       $scope.$('action-container')[0].style.bottom=-215;
     }
     $scope.$ = function(className){
       return document.getElementsByClassName(className);
     }
	},	
  }
})
.directive('headerBar', function(){
  return{
    restrict:'E',
	templateUrl:'Assets/pages/header.html',
	controller:function ($scope, serachService){
	  $scope.openMenu = function(){
	    $scope.$parent.menuActive = true;
	    $scope.$parent.containerDeactive = true;
	    //close menu is in template.js
	  }
	  $scope.openLoginBox = function(){
	    $scope.$parent.loginActive=true;
		$scope.$parent.showOverlay = true;
		
	  }
	}
  }
})
.directive('headerBarSearch', function(){
  return{
    restrict:'E',
	templateUrl:'Assets/pages/header-search.html',
	controller:function ($scope, serachService){
	  $scope.openMenu = function(){
	    $scope.$parent.menuActive = true;
	    $scope.$parent.containerDeactive = true;
	    //close menu is in template.js
	  }
	  $scope.openLoginBox = function(){
	    $scope.$parent.loginActive=true;
		$scope.$parent.showOverlay = true;
	  }
	}
  }
})
.directive('menu', function(){
  return{
    restrict:'E',
	templateUrl:'Assets/pages/menu.html'
  }
})
.directive('overlay', function(){
  return{
    restrict:'E',
	template:'<div class="overlay" ng-if="showOverlay"></div>'
  }
})
.directive('login', function(){
  return{
    restrict:'E',
	templateUrl:'Assets/pages/login.html',
	controller:function($scope){
	  $scope.closeLoginBox = function(){
	    $scope.loginActive=false;
		$scope.showOverlay = false;
	  }
	}
  }
})
.directive('actionBar', function(){
  return{
    restrict:'E',
	templateUrl:'Assets/pages/action-bar.html',
	controller:function($scope){
	  $scope.actionBarOption = function(){
       $scope.showOverlay=false;
       $scope.$('action-container')[0].style.bottom=-215;
     }
	  $scope.$ = function(className){
       return document.getElementsByClassName(className);
     }	
	},
	link:function(scope, ele, atr, ctrl){
	  
   }
  }
})
.directive('notification', function(){
  return{
    restrict:'E',
	template:'<div class="notification-container" ng-if="notificationContainerDisplay">'
	  +'<div class="notification">'
	   +'<span class="avatar-img"><img src="Assets/images/icon-error.png"></span>'
	   +'<span class="text">{{text.split("$")[0]}}</span>'
	   +'<span ng-click="closeNoti()"><i class="icon ion-android-close"></i></span>'
	 +'</div>'
	+'</div>',
    scope:{
     text:'@text'
    },
	controller:function($scope, $timeout){
	  $scope.notificationContainerDisplay = false;
	  $scope.$watch('text', function(newText, oldText){
	  console.log('Noti text Changed', newText+' n', oldText+' o');
		if(newText!=oldText){
		  //console.log('Noti text Changed', newText, oldText);
		  $scope.notificationContainerDisplay = true;
		  //$timeout(function(){$scope.notificationContainerDisplay = false;},2000);
		}
	  });
	  $scope.closeNoti = function(){
	    $scope.notificationContainerDisplay = false;
	  }
	}
  }
})
.directive('loader', function(){
  return{
    restrict:'E',
	template:'<div class="loader">'
			+'	<svg class="loader__img" viewBox="0 0 100 100" width="100px" height="100px">'
			+'		<circle class="loader__circle" cx="22.8" cy="77.6" r="16.5"/>'
			+'		<circle class="loader__circle" cx="52.2" cy="82.9" r="6.5"/>'
			+'		<circle class="loader__circle" cx="79.8" cy="69.8" r="13.1"/>'
			+'	</svg>'
			+'</div>'
  }
})
.directive('directionMap', function(){
  return{
    restrict:'E',
	template:'<iframe width="100%" height="350" frameborder="0" style="border:0"'
             +'src="{{mapSrc}}" allowfullscreen>'
             +'</iframe>',
	scope:{
	  addr:'=addr',
	},
	controller:function($scope, $sce){
	  console.log($scope.addr,'in directionMap');
	  $scope.mapSrc = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/directions?key=AIzaSyDFZEBpTNBweNhkEDiwZ1ofJasP7F2ov5k&origin="+$scope.addr.saddr+"&destination="+$scope.addr.daddr);
	}
  }
})
.directive('preview', function(){
  return{
    restrict:'E',
	scope:{
	   toggle:"&toggle",
       data:"="
	},
	templateUrl:'Assets/pages/preview.html',
	controller:function($scope){
	 console.log('p cntrl ')
	  console.log($scope.data,'sdsdsd')
	  $scope.dataFromServer = $scope.data;
	  $scope.mwpTabs = $scope.dataFromServer.tabs;
	  $scope.activeTab = $scope.mwpTabs[0];
	  
	 $scope.toogleActiveMwpTab = function(currentMwpTab){
       for(var i=0;i<$scope.mwpTabs.length;i++){
	    console.log($scope.mwpTabs[i]);
	    $scope.mwpTabs[i].active = false;
	   }
	
	  $scope.activeTab = currentMwpTab;
	  currentMwpTab.active = true;
     }
	  $scope.toggleFun = function(){
	  console.log($scope.toogle);
	  if($scope.toggle!=null && $scope.toggle!=undefined){
        $scope.toggle(); 
	  }
	 }  
	},
	link:function(scope,ele, atr, ctrl){
	  console.log(scope.data,' from ss');
	}
  }
})


