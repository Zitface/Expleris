(function(){
	"use strict";

	var newsService = function($http, $rootScope){		

		var getNews = function(){
					return $http.get("/api/news")
						.then(function(response){
							return response.data;
						}, getError)
				}

		return {
			getNews: getNews
		}
	}

angular
		.module("Main")
		.factory("newsService", newsService); 
}());