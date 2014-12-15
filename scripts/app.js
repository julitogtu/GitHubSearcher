/**
 * Created by NinjaDev
 */

(function(){
    var app = angular.module("githubSearcher", ["ngRoute","ngAnimate"]);


    app.config(function($routeProvider){
        $routeProvider
            .when("/search", {
                templateUrl: "search.html",
                controller: "githubController"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "githubUserController"
            })
            .when("/demo", {
                templateUrl: "demo.html",
                controller: "demoController"
            })
            .otherwise({redirectTo:"/search"});
    });
}());

