(function(){
		"use strict";

		angular
			.module("Main", [])
			.controller("mainCtrl", mainCtrl);
			
		function mainCtrl($scope, $http){

			var getProducts = function(response){
				$scope.products = response.data;
			}	

			var getCategories = function(response){
				$scope.categories = response.data;
			}

			var getError = function(reason){
				$scope.error = "Sorry, something went wrong with the data.";
			}

			$scope.categoryChange = function(category){

			}
			
			$http.get("data/products.json")
				 .then(getProducts, getError);

			$http.get("data/categories.json")
				 .then(getCategories, getError);
		}

})();