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

			$scope.categoriesSelected = [];
			$scope.catChange = function(category) {
				var i = $scope.categoriesSelected.indexOf(category);
					if(i > -1) {
						$scope.categoriesSelected.splice(i, 1);
					} else {
						$scope.categoriesSelected.push(category);
					}
			}

			$scope.catFilter = function(product){
				if($scope.categoriesSelected.length > 0){
					if($scope.categoriesSelected.indexOf(product.category) < 0){
						return;
					}
				}
				return product;
			}

			$http.get("src/client/data/products.json")
				 .then(getProducts, getError);

			$http.get("src/client/data/categories.json")
				 .then(getCategories, getError);

	}

}());