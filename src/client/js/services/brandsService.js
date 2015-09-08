(function(){
	"use strict";

	var brandsService = function($http, $rootScope){

		var getBrands = function(){
			return $http.get("/api/brands")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var getBrand = function(id){
			return $http.get("src/client/data/brands.json")
						.then(function(response){
							return findBrandInArray(response.data, id);
						})
		}
		
		var findBrandInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			});
		}

		var createBrand = function(brand){
			$http.post("/api/brand/", {
				'name': brand.name,
				'price': brand.price,
				'category': brand.category,
				'description': brand.description
			})
			.success(function(response){
				console.log(response)
			})
			.error(function(response){
				console.log(response)
			})
		}

		return {
			createBrand:createBrand,
			getBrands:getBrands,
			getBrand:getBrand
		}

	}



	angular
		.module("Main")
		.factory("brandsService", brandsService); 
}());