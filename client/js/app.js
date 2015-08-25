(function(){
		"use strict";

		angular
			.module("Main",
					["Main.products","ngRoute"]
		 	)
			.run(function($rootScope){
					$rootScope.cartProducts = {};
			})

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
                    .otherwise({ redirectTo: '/'});
		})

})();