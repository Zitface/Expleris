(function(){
	
	"use strict";

	angular
		.module("Main.news", [])
		.controller("newsCtrl", newsCtrl);

	function newsCtrl($scope, newsService, $http){

		var getNews = function(response){
			$scope.news = response.data;
		}	

		var getEvents = function(response){
			$scope.events = response.data;
		}

		var getMonths = function(response){
			$scope.months = response.data;
		}	

		var getError = function(reason){
			$scope.error = "Sorry, something went wrong with the data.";
		}

		$scope.monthsSelected = [];
		$scope.eventMessage = '';

		$scope.monthChange = function(month){

			if($scope.monthsSelected.length > 0) $scope.monthsSelected = [];
			var i = $scope.monthsSelected.indexOf(month);
				if(i > -1) {
					$scope.monthsSelected.splice(i, 1);
				} else {
					$scope.monthsSelected.push(month);
				}
		}

		$scope.selected = -1;

			$scope.select = function(index) {
      			$scope.selected = index; 
   			}

		$scope.monthFilter = function(event){

				if($scope.monthsSelected.length > 0){
					if($scope.monthsSelected.indexOf(event.month) < 0){
						return;
					}
				}
				return event;
		}	

		$http.get("src/client/data/news.json")
				 .then(getNews, getError);

		$http.get("src/client/data/events.json")
				 .then(getEvents, getError);

		$http.get("src/client/data/months.json")
				 .then(getMonths, getError);

	}

}());