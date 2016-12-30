angular.module('app.controllers').controller('mwpviewCntrl', function($scope, $timeout, $state){
  console.log('mwpviewCntrl ctrl');
  console.log($state.params);
  $scope.showHideLoader = false;
  
  //Preview : json data structure for PREVIEW
  //Get this data for search result from server
  $scope.dataFromServer = {
	    'public':false,
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
  //$timeout(function(){$scope.showHideLoader = false;},2000);
  
  $scope.togglePreview = function(){
    $state.go('template.search');
  }
})