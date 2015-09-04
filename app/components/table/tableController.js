
// Define all controllers for tableModule
// tableService is injected through function declaration

tableModule.controller('tableController', function ($scope, tableService){
	
  $scope.rows = tableService.getAllUsers(); 	
  $scope.temp = false;
  $scope.email="";
  
  $scope.addRow = function(){
	if ($scope.exists($scope.addName)) {
		$scope.rows.pop();
		alert("Cannot add an user with same name!");
	} else {
		$scope.rows[$scope.rows.length-1].email = $scope.email;
	} 
    $scope.temp = false;
    $scope.addName="";      
    $scope.email = "";
  };
  
  $scope.deleteRow = function(row){	 
	if (confirm("Want to delete '" +  row.name + "' ?")) {
		$scope.rows.splice($scope.rows.indexOf(row),1);
	}
  };
  
  $scope.plural = function (tab){
    return tab.length > 1 ? 's': ''; 
  };
  
  $scope.addTemp = function(){		 
    if($scope.temp) $scope.rows.pop(); 
    else if($scope.addName) $scope.temp = true;
    
    if($scope.addName) $scope.rows.push({name: $scope.addName, email: $scope.email});
    else $scope.temp = false;
  };
  
  $scope.isTemp = function(i){
    return i==$scope.rows.length-1 && $scope.temp;
  };
  
  $scope.exists = function(name) {
	  for (var i=0; i<$scope.rows.length-1; i++) {
		  var row = $scope.rows[i];
		  if (row.name === name) {			  
			  return true;
		  }		  
	  }	  
	  return false;
  }
  
});