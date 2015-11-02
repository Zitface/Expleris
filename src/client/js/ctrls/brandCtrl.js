(function(){
	
	"use strict";

	angular
		.module("Main.brand", [])
		.controller("brandCtrl", brandCtrl);

	function brandCtrl($scope, brandsService, $routeParams){

		var modelBrand = function(brandArray){
			$scope.brand = brandArray[0];
		}

		brandsService.getBrand($routeParams.id)
			.then(modelBrand);

		
	}   

}());
