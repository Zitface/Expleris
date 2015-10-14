(function(){

	angular
		.module("Main.event", [])
		.controller("eventCtrl", eventCtrl);

	function eventCtrl($scope, newsService, $routeParams){

		var modelEvent = function(eventArray){
			$scope.event = eventArray[0];
		}

		newsService.getEvent($routeParams.id)
			.then(modelEvent);

	}   

}());
