(function(){
	"use strict";

	angular
		.module("Main.news", [])
		.controller("newsCtrl", newsCtrl);

	function newsCtrl($scope, newsService, $http){

		var getNews = function(response){
				$scope.news = response.data;
			}	

		var getError = function(reason){
				$scope.error = "Sorry, something went wrong with the data.";
			}

		$http.get("src/client/data/news.json")
				 .then(getNews, getError);

	}

}());