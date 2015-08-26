(function(){
	"use strict";

	angular
		.module("Main.header", [])
		.controller("headerCtrl", headerCtrl);

	function headerCtrl($scope, $location){

		$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

	}

}());