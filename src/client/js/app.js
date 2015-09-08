(function(){
		"use strict";

		angular
			.module("Main",
					["Main.home", "Main.brands", "Main.brand", "Main.news", 
                     "Main.header", "Main.admin", "ngRoute"]
		 	)
			.config(function($routeProvider){
        	$routeProvider
        	        .when("/brands", {
                                templateUrl: "src/client/views/brands.html",
                                controller: "brandsCtrl"
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
                    .when("/admin", {
                                templateUrl: "src/admin/admin.html",
                                controller: "adminCtrl"
                    })
                    .when('/brand/:id', {
                                templateUrl: "src/client/views/brand.html",
                                controller: "brandCtrl"
                    })
                    .otherwise({ redirectTo: '/home'});
		})

})();