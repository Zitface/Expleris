(function(){
	"use strict";

	angular
		.module("Main.brands", [])
		.controller("brandsCtrl", brandsCtrl);

	function brandsCtrl($scope, brandsService, $http){

			var modelBrands = function(data){
				$scope.brands = data;
			}
			
			var modelCategories = function(data){
				$scope.foodCategories = data;
			}	

			var getBrands = function(response){
				$scope.brands = response.data;
			}	

			var getFoodCategories = function(response){
				$scope.foodCategories = response.data;
			}

			var getNonfoodCategories = function(response){
				$scope.nonfoodCategories = response.data;
			}

			var getError = function(reason){
				$scope.error = "Sorry, something went wrong with the data.";
			}

			$scope.categoriesSelected = [];
			$scope.catChange = function(category) {
				if($scope.categoriesSelected.length > 0) $scope.categoriesSelected = [];
				var i = $scope.categoriesSelected.indexOf(category);
					if(i > -1) {
						$scope.categoriesSelected.splice(i, 1);
					} else {
						$scope.categoriesSelected.push(category);
					}
			}

			$scope.selected = -1;

			$scope.select = function(index) {
      			$scope.selected = index; 
   			};

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

			$http.get("src/client/data/nonfoodCategories.json")
				 .then(getNonfoodCategories, getError);

			$http.get("src/client/data/foodCategories.json")
				 .then(getFoodCategories, getError);

	}

}());