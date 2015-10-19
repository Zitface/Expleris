(function(){
	"use strict";

	angular
		.module("Main.header", [])
		.controller("headerCtrl", headerCtrl);

	function headerCtrl($scope, $location, $http){
		
		$scope.isActive = function (viewLocation) { 
        	return viewLocation === $location.path();
   		}
	}

}());