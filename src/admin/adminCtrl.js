(function(){
	
	"use strict";

	angular
		.module("Main.admin", [])
		.controller("adminCtrl", adminCtrl);

	function adminCtrl($scope, $http){
		//GET all and Refresh
		var refresh = function(){
			$http.get("/api/foods/").success(function(response){
				$scope.foods = response;
				$scope.food = "";
			});
		}

		refresh();
		
		//Create
		$scope.createFood = function(){
			$http.post("/api/foods", $scope.food).success(function(response){
				refresh();
			});
		}
		//Delete
		$scope.delFood = function(id){
			$http.delete("/api/food/" + id)
			.success(function(response){
				$scope.food = response;
				refresh();
			});
	    }
	    //GET one and send to input fields
	    $scope.editFood = function(id){
	    	$http.get("/api/food/" + id)
	    	.success(function(response){
	    		$scope.food = response;
	    	});
	    }
	    //Update
	    $scope.updateFood = function(){
	    	$http.put("/api/food/" + $scope.food._id, $scope.food);
	    	refresh();
	    }

	}

}());