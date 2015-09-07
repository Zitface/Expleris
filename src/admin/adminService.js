(function(){
	"use strict";

	var adminService = function($http, $rootScope){

		var getBrands = function(){
			return $http.get("/api/brands")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var createBrand = function(brand){
			$http.post("/api/brands/", {
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
			createBrand:createBrand
		}

	}



	angular
		.module("Main")
		.factory("adminService", adminService); 
}());