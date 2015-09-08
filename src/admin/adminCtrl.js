(function(){
	"use strict";

	angular
		.module("Main.admin", [])
		.controller("adminCtrl", adminCtrl);

	function adminCtrl($scope, adminService, $http){

			var modelBrands = function(data){
				$scope.brands = data;
			}

			var modelCategories = function(data){
				$scope.categories = data;
			}

			var getBrands = function(response){
				$scope.brands = response.data;
			}	

			var getError = function(reason){
				$scope.error = "Sorry, something went wrong with the data.";
			}

			$scope.createBrand = function(brand){
				console.log("The brand has been created and saved in the database")
				var brand = this.brand;
				adminService.createBrand(brand);
			}

			$scope.delBrand = function(){
				console.log("Delete!")
				adminService.delBrand()
				.then(adminService.getBrands()
						.then(modelBrands))
		    }

			adminService.getBrands()
			.then(modelBrands);

			adminService.getCategories()
			.then(modelCategories);

	}

}());