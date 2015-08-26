(function(){
	"use strict";

	angular
		.module("Main.news", [])
		.controller("newsCtrl", newsCtrl);

	function newsCtrl($scope){

		$scope.getClass = function (path) {
			if ($location.path().substr(0, path.length) === path) {
				return 'active';
				} else {
					 return '';
				}
		}
	}

}());