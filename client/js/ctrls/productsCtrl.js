(function(){
	"use strict";

	angular
		.module("Main.products", [])
		.controller("productsCtrl", productsCtrl);

	function productsCtrl($scope, $http){

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

			$scope.getClass = function (path) {
				if ($location.path().substr(0, path.length) === path) {
    				return 'active';
  				} else {
   					 return '';
  				}
			}
			
			$http.get("data/products.json")
				 .then(getProducts, getError);

			$http.get("data/categories.json")
				 .then(getCategories, getError);

	}

}());