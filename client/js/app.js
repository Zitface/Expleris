(function(){
		"use strict";

		angular
			.module("Main",
					["Main.home", "Main.products", "Main.news", "Main.header", "ngRoute"]
		 	)
			.config(function($routeProvider){
        	$routeProvider
        	        .when("/products", {
                                templateUrl: "views/products.html",
                                controller: "productsCtrl"
                    })
                    .when("/news", {
                                templateUrl: "views/news.html",
                                controller: "newsCtrl"
                    })
                    .when("/aboutUs", {
                                templateUrl: "views/aboutUs.html",
                                controller: "aboutUsCtrl"
                    })
                    .when("/contactUs", {
                                templateUrl: "views/contactUs.html",
                                controller: "contactUsCtrl"
                    })
                    .when("/home", {
                    			templateUrl: "views/home.html",
                    			controller: "homeCtrl"
                    })
                    .otherwise({ redirectTo: '/home'});
		})

})();