/**
 * Created by NinjaDev
 */
(function(){

    var githubService = function(http, log){

        var getResult = function(topic, page, pageSize){
            return http.get("https://api.github.com/search/repositories?q=" + topic + "&page=" + page + "&per_page=" + pageSize)
                .then(function(response){
                    return response.data;
                });
        };

        var getUser = function(username)
        {
            return http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getResult: getResult,
            getUser: getUser
        };

    };

    githubService.$inject = ['$http','$log'];

    var module = angular.module("githubSearcher");
    module.factory("githubService", githubService);

}());