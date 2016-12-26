angular.module('app.controllers').controller('searchCntrl', function($scope, $timeout){
  console.log('search ctrl');
  //$timeout(function(){$scope.$parent.notiText = "Search Page"},0);
  $scope.searchResultFromServer=[
    {
	  id:1,
	  title:'#1234',
	  link:"https://www.google.com",
	  msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    },
	{
	  id:2,
	  title:'#1234',
	  link:"https://www.google.com",
	  msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    },
	{
	  id:3,
	  title:'#1234',
	  link:"https://www.google.com",
	  msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    },
	{
	  id:4,
	  title:'#1234',
	  link:"https://www.google.com",
	  msg:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    }
  ];
  
  
  
  $scope.getResultDetail = function(id){
    
  }
})
