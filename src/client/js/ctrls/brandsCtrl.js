(function(){
	"use strict";

	angular
		.module("Main.brands", [])
		.controller("brandsCtrl", brandsCtrl);

	function brandsCtrl($scope, $http){

			var getBrands = function(response){
				$scope.brands = response.data;
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

			$scope.catFilter = function(brand){
				if($scope.categoriesSelected.length > 0){
					if($scope.categoriesSelected.indexOf(brand.category) < 0){
						return;
					}
				}
				return brand;
			}

			$http.get("src/client/data/brands.json")
				 .then(getBrands, getError);

			$http.get("src/client/data/categories.json")
				 .then(getCategories, getError);

	}

}());