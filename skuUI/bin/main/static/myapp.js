//creating an application module

var productAppModule = angular.module("productAppModule", ['ngRoute','angularUtils.directives.dirPagination']);


productAppModule.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'uiviews/ui.html',
		controller : 'indexController'
	})
	.when('/ux', {
		templateUrl : 'uiviews/ui.html',
		controller : 'indexController'
	})
	.when('/one', {
		templateUrl : 'uiviews/location.html',
		controller : 'locationController'
	})
	.when('/two', {
		templateUrl : 'uiviews/department.html',
		controller : 'departmentController'
	})
	.when('/three', {
		templateUrl : 'uiviews/category.html',
		controller : 'categoryController'
	})
	.when('/four', {
		templateUrl : 'uiviews/subcategory.html',
		controller : 'subcategoryController'
	});

});
//creating controller for application variable
//The below code will read the data from DB  and will pass to the $scope variable or if u write 'this' call object controller in view 
productAppModule.controller("indexController", function($scope, $http){    
//            $http.get('rest/SacHsnData/sacdata') //reading the rest service
//            
//                .success (function(data){
//                        $scope.students = data; // binding the data to the $scope variable
//                        $scope.count = $scope.students.length;
//                        $scope.checkToggle = false;
//                    })
//                .error(function(data, status) {
//                        console.error('failure loading the student record', status, data);
//                        $scope.students = { }; //return blank record if something goes wrong
//                });
            //
            
	$scope.init = function(){

		$scope.students = [{
			id: 0,
			type : "Executive",
			name : "Ann Brown",
			title :"CEO",
			phone:"1234567891",
			ext:"+91",
			fax:"+442427321",
			email:"annbrown@dummy.com",
			editable:false
		},
		{
			id: 1,
			type : "Inmar AR",
			name : "Mary Smith",
			title :"Vice President Sales",
			phone:"1234567891",
			ext:"+91",
			fax:"+442427321",
			email:"marysmith@dummy.com",
			editable:false
		},
		{
			id: 2,
			type : "Executive",
			name : "Jhon Doe",
			title :"CTO",
			phone:"1234567891",
			ext:"+91",
			fax:"+442427321",
			email:"jhondoe@dummy.com",
			editable:false
		},
		{
			id: 3,
			type : "Daily",
			name : "Nicholas Dan",
			title :"Product Manager",
			phone:"1234567891",
			ext:"+91",
			fax:"+442427321",
			email:"nicholas@dummy.com",
			editable:false
		},
		{
			id: 4,
			type : "Other",
			name : "Nick Jonas",
			title :"VP Marketing",
			phone:"1234567891",
			ext:"+91",
			fax:"+442427321",
			email:"nickjonas@dummy.com",
			editable:false
		}]; // binding the data to the $scope variable
		 $scope.count = $scope.students.length;
		    $scope.checkToggle = false;	
	}
	
            
            
            
            
            //Variable declarations
            
            $scope.updateData = [];
            $scope.entity = {} 
            $scope.searchKeyword="";
            $scope.onEditChangeResult = "";
            $scope.onCheckBoxChangeResult = "";
            $scope.onEditNoModelChangeResult = "";
            $scope.names = [3, 5, 7];
            $scope.noofitems = "";
            $scope.error = false;
            $scope.errorData = [];
            $scope.pageno=[3,5,8,50,100];
            $scope.selectedPageno=5;
            $scope.currentpage=1;
          
            
            
            
            // Event handlers
            
            $scope.sort = function(keyname){
                $scope.sortBy = keyname;   //set the sortBy to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }
            
            
            
            $scope.onEditChange = function () {
              $scope.onEditChangeResult = "the value is '" + $scope.editValue + "'";
            };
           $scope.val = false;
            $scope.onCheckBoxChange = function (index) {
            	$scope.entity = $scope.students[index];
            	/*$scope.entity.index = index;*/
            	
            	if($scope.entity.editable == false){
            		$scope.entity.editable = true;	
            		
            		$scope.updateData.push($scope.students[index]);
            	}
            	else{
            		
            		$scope.updateData.pop($scope.students[index]);
            		
            		$scope.entity.editable = false;
            	}
            	
              
            };

            $scope.onEditNoModelChange = function () {
              $scope.onEditNoModelChangeResult = "CHANGED";
            };
            
            
    	    $scope.flag = false;
          	 $scope.edit = function(index){
          	   flag=true;
          	   $scope.entity = $scope.students[index];
          	   $scope.entity.index = index;
          	   $scope.entity.editable = true;
          	 }
          	 
          	$scope.save = function(index){
          		
          		
         	   
         	 }
            
       	// for data table paginations
          	
          	$scope.currentPage = 1;
            $scope.empsPerPage = 10;

            $scope.SelectAll = function (empsPerPage,currentPage) {
            	
            
                for (i = 0 ; i < $scope.students.length ; i++) {
                    
                    
                	/*$scope.entity.index = index;*/
                	
                	
                	if($scope.students[i].editable == false){
                	
                		$scope.students[i].editable = true;	
                		$scope.checkValue = true;
                		$scope.updateData.push($scope.students[i]);
                	}
                	else{
                		
                		$scope.updateData.pop($scope.students[i]);
                		$scope.checkValue = false;
                		$scope.students[i].editable = false;
                	}
                	
                }
            };

            
            $scope.ClearAll = function () {
                $scope.ckbAll = false;
                for (i = 0; i < $scope.students.length; i++) {
                    $scope.students[i].editable = false;
                }
            };

            $scope.SelectOne = function (epp, cp) {
                for (i = epp * (cp - 1) ; i < $scope.students.length && i < epp * cp; i++) {
                    if($scope.students[i].editable ==false)
                    {
                        $scope.ckbAll = false;
                        return;
                    }
                }
                $scope.ckbAll = true;
            };
            
            
            
            //Add row Functionality
            
            $scope.addRow = function(){		
            	
            	
            	
            		$scope.bol = true;
            		$scope.students = [];
            		$scope.checkValue = true;
        			$scope.students.push({"type":"","name":"","title":"","phone":"" ,"ext":"active","fax":"", "email":"","editable":true,"id":$scope.count});
            		

            };
            
            $scope.addRow2 = function(){		
            	
            		$scope.count++;
            		$scope.checkValue = true;
            		$scope.students.push({"type":"","name":"","title":"","phone":"" ,"ext":"active","fax":"", "email":"","editable":true,"id":$scope.count});
                   
            	
            	
            	
            };
            
            
            
            
            
            
            
            //Refreshing the data table
            
            
            $scope.refresh = function(){
            	$scope.bol = false;
//            	$http.get('rest/SacHsnData/sacdata') //reading the student.json file
//                
//                .success (function(data){
//                        $scope.students = data; // binding the data to the $scope variable
//                        $scope.count = $scope.students.length;
//                        $scope.checkToggle = false;
//                        $scope.checkValue = false;
//                        $scope.bol = false;
//                        $scope.currentpage="1";
//                        $scope.selectedPageno=5;
//                        $scope.mainerror=false;
//                        $scope.sacSearch = '';
//                    	$scope.codeSearch = '';
//                    	$scope.typeSearch = '';
//                    	$scope.statusSearch = '';
//                        
//                    })
//                .error(function(data, status) {
//                        console.error('failure loading the sac/hsn records', status, data);
//                        $scope.students = { }; //return blank record if something goes wrong
//                });
            	
            	$scope.init();
            	$scope.count = $scope.students.length;
              $scope.checkToggle = false;
              $scope.checkValue = false;
              $scope.bol = false;
              $scope.currentpage="1";
              $scope.selectedPageno=5;
              $scope.mainerror=false;
            	
            	$scope.updateData = [];
            }
            
            
            
            // Updating Records for main Screen
            
            $scope.updateMainScreen = function() {
//               
//                $http({
//                    method : 'POST',
//                    url : 'rest/SacHsnData/sacUpdate',
//                    data : JSON.stringify($scope.updateData),
//                    headers: {
//                        'Content-Type': 'application/json'
//                    }
//                }).success(function(data) {
//
//                	$http.get('rest/SacHsnData/sacdata') //reading the student.json file
//                    
//                    .success (function(data){
//                    	  
//                           $scope.students = data; // binding the data to the $scope variable
//                           $scope.count = $scope.students.length;
//                           $scope.selectedPageno=5;
//                           
//                           $scope.mainerror = true;
//                           $scope.checkValue = false;
//                           $scope.checkToggle = false;
//                           	
//                            
//                            
//                            
//                        })
//                    .error(function(data, status) {
//                            console.error('failure loading the sac/hsn records', status, data);
//                            $scope.students = { }; //return blank record if something goes wrong
//                    });
//                	
//                	
//                }).error(function(data) {
//                    console.log(data);
//                });
//                console.log("POST done");
//                $scope.updateData = [];
//                
//                
            };
            
            
            //Adding new rows in main screen
            
            $scope.saveNewRows=function(){
            	$http({
                    method : 'POST',
                    url : 'rest/SacHsnData/sacInsert',
                    data : JSON.stringify($scope.students),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function(data) {

                	$http.get('rest/SacHsnData/sacdata') //reading the records via restful service
                    
                    .success (function(data){
                    	$scope.students = data; // binding the data to the $scope variable
                        $scope.count = $scope.students.length;
                        $scope.checkToggle = false;
                        $scope.checkValue = false;
                        $scope.bol = false;
                        $scope.currentpage="1";


                        })
                    .error(function(data, status) {
                            console.error('failure loading the sac/hsn records', status, data);
                            $scope.students = { }; //return blank record if something goes wrong
                    });
                	$scope.updateData = [];
                	
                }).error(function(data) {
                    console.log(data);
                });
                console.log("POST done");
                
            	
            	
            	
            }
            //
            
            $scope.closeError = function(){
            	$scope.mainerror=false;
            	
            	
            }
            
           
            
            
            
            //Clearing the search filters
            
            $scope.clearFilters =function(){
            	
            	$scope.sacSearch = '';
            	$scope.codeSearch = '';
            	$scope.typeSearch = '';
            	$scope.statusSearch = '';
            	
            }
            
            //Rest service for outbound text file
            
            $scope.outBound = function(){
            	
            	$http.get('rest/SacHsnData/outdata') //reading the rest service
                
                .success (function(data){
                        $scope.studentsout = "Total no.of Records Outbounded - > "+$scope.count; 
                        $scope.error = true;
                        // binding the data to the $scope variable
                        
                    })
                .error(function(data, status) {
                        console.error('failure loading the student record', status, data);
                        $scope.studentsout = { }; //return blank record if something goes wrong
                });
            	
            	
            }
            
            
            
            
            
            
          	
       	
            
            
    } 
);