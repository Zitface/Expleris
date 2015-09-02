(function(){
		"use strict";

		angular
			.module("Main",
					["Main.home", "Main.products", "Main.news", "Main.header", "ngRoute"]
		 	)
			.config(function($routeProvider){
        	$routeProvider
        	        .when("/products", {
                                templateUrl: "src/client/views/products.html",
                                controller: "productsCtrl"
                    })
                    .when("/news", {
                                templateUrl: "src/client/views/news.html",
                                controller: "newsCtrl"
                    })
                    .when("/aboutUs", {
                                templateUrl: "src/client/views/aboutUs.html",
                                controller: "aboutUsCtrl"
                    })
                    .when("/contactUs", {
                                templateUrl: "src/client/views/contactUs.html",
                                controller: "contactUsCtrl"
                    })
                    .when("/home", {
                    			templateUrl: "src/client/views/home.html",
                    			controller: "homeCtrl"
                    })
                    .otherwise({ redirectTo: '/home'});
		})

})();