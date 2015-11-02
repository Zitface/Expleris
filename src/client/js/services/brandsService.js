(function(){
	
	"use strict";

	var brandsService = function($http, $rootScope){

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

		return {
			getBrand:getBrand
		}

	}

	angular
		.module("Main")
		.factory("brandsService", brandsService); 
}());