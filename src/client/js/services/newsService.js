(function(){
	
	"use strict";

	var newsService = function($http, $rootScope){		

		var getNews = function() {
			return $http.get("/api/news")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var getEvents = function() {
			return $http.get("/api/events")
				.then(function(response){
					return response.data;
				}, getError)
		}

		var getEvent = function(id) {
			return $http.get("src/client/data/events.json")
						.then(function(response){
							return findEventInArray(response.data, id);
						})
		}

		var findEventInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			});
		}


		var getMonths = function(){
			return $http.get("/api/months")
				.then(function(response){
					return response.data;
				}, getError)
		}
				
		var getError = function(reason) {
				$scope.error = "Sorry, something went wrong with the data.";
			}

		return {
			getNews  : getNews,
			getEvents: getEvents,
			getEvent:  getEvent, 
			getMonths: getMonths
		}
	}

angular
		.module("Main")
		.factory("newsService", newsService); 
}());