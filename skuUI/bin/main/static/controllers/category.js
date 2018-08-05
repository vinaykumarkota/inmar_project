/**
 * 
 */

productAppModule.controller("categoryController", [
	'$scope',
	'$http',
	'categoryService',function($scope, $http,categoryService){
	
$scope.statusDropdown = ["Active","In-Active"];
	
	$scope.categoryName="";
	$scope.categoryDesc="";
	$scope.locationName="";
	$scope.departmentName="";
	$scope.selectedStatus="";

	
	$scope.init=function(){
		
		$scope.locationDropdown=["USA","Canada"];
		$scope.departmentDropdown=["Bakery","Dairy","Vegetables"];
		//data tbale data
		$scope.categoryData=[];
		categoryService.getAllCategories().then(function(data) {
			$scope.categoryData = data;
//			console.log($scope.categoryData);
			$scope.count = $scope.categoryData.length;
			$scope.$digest();
		}, function() {
			// alert('error');
		});
	}
	$scope.SelectAll = function() {

		angular.forEach($scope.categoryData, function(data) {

			data.editable = $scope.checkToggle;
		});
		$scope.$digest();
	}

	$scope.onCheckBoxChange = function(value) {
		$scope.checkToggle = true;
		angular.forEach($scope.categoryData, function(data) {
			if (data.editable == false)
				$scope.checkToggle = false;

		});

	}

	$scope.refresh = function() {
		$scope.bol = false;
		$scope.init();
	}

	$scope.addRow = function() {
		$scope.count = 1;
		$scope.bol = true;
		$scope.checkToggle = true;
		$scope.categoryData = [];
		$scope.checkValue = true;
		$scope.categoryData.push({
			"categoryId":null,
			"categoryName":"",
			"categoryDesc":"",
			"departmentId" : null,
			"departmentName" : "",
			"activeFlag" : "active",
			"editable" : true,
			"locationId":null,
			"locationName" : "",
			"id" : $scope.count
		});

	};

	$scope.addRow2 = function() {
		$scope.count++;
		$scope.checkValue = true;
		$scope.categoryData.push({
			"categoryId":null,
			"categoryName":"",
			"categoryDesc":"",
			"departmentId" : null,
			"departmentName" : "",
			"activeFlag" : "active",
			"editable" : true,
			"locationId":null,
			"locationName" : "",
			"id" : $scope.count
		});

	};

	$scope.updateMainScreen = function() {
		$scope.newData = [];
		angular.forEach($scope.categoryData, function(data) {
			if (data.editable == true)
				$scope.newData.push(data);
		});
		console.log($scope.newData);

		categoryService.saveCategoryData($scope.newData).then(
				function(data) {
					$scope.categoryData = data;
					// console.log($scope.categoryData);
					$scope.count = $scope.categoryData.length;
					$scope.init();
					$scope.$digest();
				}, function() {
					// alert('error');
				});

	}

	$scope.deleteRow = function(value) {

		categoryService.deleteCategory(value).then(function(data) {
			// $scope.categoryData=data;
			// console.log($scope.categoryData);
			$scope.init();
			$scope.count = $scope.categoryData.length;
			$scope.$digest();
		}, function() {
			// alert('error');
		});
	}
	$scope.saveLocation=function(){
		$scope.categorySaveData ={
				 'categoryId':1,
				 'categoryName':$scope.categoryObject.categoryName,
				 'categoryDesc': $scope.categoryObject.categoryDesc,
				 'locationName':$scope.categoryObject.locationName,
				 'departmentName':$scope.categoryObject.departmentName,
		         'activeFlag': $scope.categoryObject.selectedStatus,
		         'editable':false
	   			
	   	}
		//to  save service
		console.log($scope.categorySaveData);
	}
}]);

productAppModule
.service(
		"categoryService",
		[
				'$http',
				function($http) {

					this.deleteCategory = function(data) {
						return new Promise(
								function(resolve, reject) {
									$http
											.post(
													'http://localhost:9060/Data/department/deleteDepartment',
													data)
											.then(function(response) {
												resolve(response.data);
											}, function(error) {
												reject([]);
											});
								});
					}

					this.getAllCategories = function() {
						return new Promise(
								function(resolve, reject) {
									$http
											.get(
													'http://localhost:9060/Data/category/allCategories')
											.then(function(response) {
												resolve(response.data);
											}, function(error) {
												reject([]);
											});
								});
					}

					this.saveCategoryData = function(data) {
						return new Promise(
								function(resolve, reject) {
									$http
											.post(
													'http://localhost:9060/Data/department/saveDepartments',
													data)
											.then(function(response) {
												resolve(response.data);
											}, function(error) {
												reject([]);
											});
								});
					}

				} ]);