(function(){

	"use strict";

	angular
		.module("Main",
				["Main.home", "Main.brands", "Main.brand", "Main.news", "Main.event",
                 "Main.header", "Main.admin", "ngRoute"]
	 	)
		.config(function($routeProvider){
            
    	$routeProvider

            //Main Routes
            .when("/categories", {
                        templateUrl: "src/client/views/categories.html",
                        controller: "brandsCtrl"
            })
                .when("/nonfood", {
                            templateUrl: "src/client/views/non-food.html",
                            controller: "brandsCtrl"
                })
    	        .when("/brands", {
                            templateUrl: "src/client/views/foods.html",
                            controller: "brandsCtrl"
                })
                    .when('/brand/:id', {
                                templateUrl: "src/client/views/brand.html",
                                controller: "brandCtrl"
                    })
            .when("/news", {
                        templateUrl: "src/client/views/newsAndEvents.html",
                        controller: "newsCtrl"
            })
                .when('/article/:id', {
                            templateUrl: "src/client/views/article.html",
                            controller: "eventCtrl"
                })
                .when('/event/:id', {
                            templateUrl: "src/client/views/event.html",
                            controller: "eventCtrl"
                })
            .when("/aboutUs", {
                        templateUrl: "src/client/views/aboutUs.html"
            })
            .when("/contactUs", {
                        templateUrl: "src/client/views/contactUs.html"
            })
            .when("/whyUs", {
                        templateUrl: "src/client/views/whyUs.html"
            })
            .when("/home", {
            			templateUrl: "src/client/views/home.html",
            			controller: "homeCtrl"
            })

            //Admin Routes
            .when("/admin", {
                        templateUrl: "src/admin/views/admin.html",
                        controller: "adminCtrl"
            })
                .when("/adminBrands", {
                            templateUrl: "src/admin/views/adminBrands.html",
                            controller: "adminCtrl"
                })
                .when("/adminCategories", {
                            templateUrl: "src/admin/views/adminCategories.html",
                            controller: "adminCtrl"
                })
                .when("/adminNews", {
                            templateUrl: "src/admin/views/adminNews.html",
                            controller: "adminCtrl"
                })
                .when("/adminEvents", {
                            templateUrl: "src/admin/views/adminEvents.html",
                            controller: "adminCtrl"
                })

            //Default
            .otherwise({ redirectTo: '/home'});

	    })

})();