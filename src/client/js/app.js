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
                        .when("/non-food", {
                                    templateUrl: "src/client/views/non-food.html",
                                    controller: "brandsCtrl"
                        })
            	        .when("/brands", {
                                    templateUrl: "src/client/views/brands.html",
                                    controller: "brandsCtrl"
                        })
                            .when('/brand/:id', {
                                        templateUrl: "src/client/views/brand.html",
                                        controller: "brandCtrl"
                            })
                    .when("/news", {
                                templateUrl: "src/client/views/news.html",
                                controller: "newsCtrl"
                    })
                        .when('/event/:id', {
                                    templateUrl: "src/client/views/event.html",
                                    controller: "eventCtrl"
                        })
                    .when("/aboutUs", {
                                templateUrl: "src/client/views/aboutUs.html",
                                controller: "aboutUsCtrl"
                    })
                    .when("/contactUs", {
                                templateUrl: "src/client/views/contactUs.html",
                                controller: "contactUsCtrl"
                    })
                    .when("/services", {
                                templateUrl: "src/client/views/services.html",
                                controller: "serviceCtrl"
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