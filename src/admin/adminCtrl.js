(function(){
	"use strict";

	angular
		.module("Main.admin", [])
		.controller("adminCtrl", adminCtrl);

	function adminCtrl($scope, adminService, $http){

			var getBrands = function(response){
				$scope.brands = response.data;
			}	

			var getCategories = function(response){
				$scope.categories = response.data;
			}

			var getError = function(reason){
				$scope.error = "Sorry, something went wrong with the data.";
			}

			$scope.createBrand = function(brand){
				console.log("The brand has been created and saved in the database")
				var brand = this.brand;
				adminService.createBrand(brand);
			}

			$http.get("src/client/data/brands.json")
				 .then(getBrands, getError);

			$http.get("src/client/data/categories.json")
				 .then(getCategories, getError);

	}

}());