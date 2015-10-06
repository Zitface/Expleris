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
				console.log("The brand has been created and stored in the database")
				var brand = this.brand;
				adminService.createBrand(brand);
			}

			$scope.delBrand = function(id){
				console.log(id);
				$http.delete("/api/brand/" + id)
				.then(function(response){
							return response;
						});
		    }

			adminService.getBrands()
			.then(modelBrands);

			adminService.getCategories()
			.then(modelCategories);

	}

}());