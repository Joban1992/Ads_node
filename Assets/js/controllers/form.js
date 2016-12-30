angular.module('app.controllers').controller('formCntrl', function($scope, $timeout, $filter, $sce){
  console.log('form ctrl');
  $scope.init = function(){
    $scope.layoutToggle = false;
	//$timeout(function(){console.log(document.getElementsByClassName('google-maps-link').length)},9220);
	//this data will come from server for each mini web page
	
	$scope.dataFromServer = {
	    'public':true,
		'mapAddress':{
		  'saddr':'Current+Location',
		  'daddr':'Patiala, Punjab'
		},
	    'tabs':[
	      {
		  'tabname':'Basic',
	      'Name':'Joban',
		  'Heading':'Some Heading',
		  'Description':'Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl cras eu adipiscing ac cras at sem cras per senectus eu parturient quam.',
		  'Link':'Link to other Mini Web Page',
		  'active':true
	     },
	     {
		  'tabname':'Contact',
	      'Email':'jjjjjpreet@gmail.com',
		  'Phone':'9176176607',
		  'Website':'www.joban.com',
		  'active':false
	     },
	     {
		   'tabname':'Address',
		   'Location':'Address of that place',
		   'Address':'Patiala,Punjab',
		   'active':false
		 }
	   ]
	}
	$scope.mwpTabs = $scope.dataFromServer.tabs;
	$scope.activeTab = $scope.mwpTabs[0];
  }
  
  $scope.togglePreview = function(){
    $scope.preview = $scope.preview?false:true;
    if($scope.layoutToggle){
	  $scope.layoutToggle = false;
	}else{
	  $scope.layoutToggle = true;
	}
  }
  
  
  $scope.$ = function(className){
       return document.getElementsByClassName(className);
  }
    

	    
	  $scope.getNoti = function(){
	    $scope.$parent.notiText='Create MWP$'+$filter('date')(new Date(),'yyyy-MM-ddTHH:mm:ss.sssZ');
	  }
	  $scope.init();
})
