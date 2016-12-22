angular.module('app.controllers').controller('formCntrl', function($scope, $timeout, $filter, $sce){
  console.log('form ctrl');
  $scope.init = function(){
    $scope.layoutToggle = true;
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
    if($scope.layoutToggle){
	  $scope.layoutToggle = false;
	}else{
	  $scope.layoutToggle = true;
	}
  }
  
  $scope.toogleActiveMwpTab = function(currentMwpTab){
    for(var i=0;i<$scope.mwpTabs.length;i++){
	console.log($scope.mwpTabs[i]);
	 $scope.mwpTabs[i].active = false;
	}
	$scope.activeTab = currentMwpTab;
	currentMwpTab.active = true;
  }
  $scope.$ = function(className){
       return document.getElementsByClassName(className);
  }
    
	//Need to convert following code to angular
      var clickCount = 1;
	  var formHeadings = ['Select the followings', 'Fill details', 'Get it done'];
	  $scope.currentFormHeading=formHeadings[0];
	  $scope.$('btn-left')[0].style.display="none";
	 $scope.formSlider = function (flag){
	    var current = clickCount;
		var next =0;
		var activeClass="", deactiveClass="", rAactiveClass="", rDeactiveClass="";
		var moveFlag = false;
		$scope.$('btn-left')[0].style.display="block";
		$scope.$('btn-right')[0].style.display="block";
	    if(flag){
		  //going forward
		  console.log('right');
		  next = clickCount+1;
		  if($scope.$("part"+next).length!=0){
		    clickCount++; 
			moveFlag = true;
		  }
		  activeClass = "active-left";
		  deactiveClass = "deactive-left";
		  rAactiveClass = "active-right";
		  rDeactiveClass = "deactive-right";
		}else{
		  //going back
		  console.log('left');
		  
		  next = clickCount-1;
		  if($scope.$("part"+next).length!=0){
		    clickCount--;  
			moveFlag = true;
		  }
		  activeClass = "active-right";
		  deactiveClass = "deactive-right";
		  rAactiveClass = "active-left";
		  rDeactiveClass = "deactive-left";
		}
	    //current form slid
		$scope.currentFormHeading = formHeadings[next-1];
		if(moveFlag){	
		$scope.$("part"+current)[0].className="col-l12 col-m12 col-s12 part"+current;
		$scope.$("part"+next)[0].className="col-l12 col-m12 col-s12 part"+next;
		console.log(("part"+current),("part"+next));
		console.log("part"+clickCount);
		 $scope.$("part"+current)[0].classList.remove(rAactiveClass);
		$scope.$("part"+next)[0].classList.remove(rDeactiveClass);
	    $scope.$("part"+current)[0].classList.add(deactiveClass);
		$scope.$("part"+next)[0].classList.add(activeClass);
		var length =$scope. $("pagination-container-ul")[0].children.length;
		//console.log(length);
		for(var i=0;i<length;i++){
		  $scope.$("pagination-container-ul")[0].children[i].classList.remove("active"); 
		}
		console.log(current);
		$scope.$("pagination-container-ul")[0].children[next-1].classList.add("active");
		if(next==1){
		 $scope.$('btn-left')[0].style.display="none";
		}
		if(next==3){
		 $scope.$('btn-right')[0].style.display="none";
		}
		}else{
		  alert('done :: '+next)
		}
	  }
	    
	  $scope.getNoti = function(){
	    $scope.$parent.notiText='Create MWP$'+$filter('date')(new Date(),'yyyy-MM-ddTHH:mm:ss.sssZ');
	  }
	  $scope.init();
})