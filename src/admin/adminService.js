(function(){

	"use strict";

	var adminService = function($http, $rootScope){

		var getError = function(reason){
			$rootScope.error = "Something went wrong with the data!";
		}

		var getBrands = function(){
			return $http.get("/api/brands")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var getCategories = function(){
			return $http.get("/api/categories")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var createBrand = function(brand){
			$http.post("/api/brand/", {
				'name': brand.name,
				'description': brand.description,
				'img': brand.img,
				'category': brand.category
				
			})
			.success(function(response){
				console.log(response)
			})
			.error(function(response){
				console.log(response)
			})
		}

		/*var delBrand = function(id){
			console.log(id);
			return $http.delete("/api/brand/" + id)
						.then(function(response){
							return response;
						});
		}*/

		return {
			createBrand:createBrand,
			//delBrand:delBrand,
			getBrands:getBrands,
			getCategories:getCategories
		}

	}



	angular
		.module("Main")
		.factory("adminService", adminService); 
}());