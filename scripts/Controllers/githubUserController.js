/**
 * Created by NinjaDev
 */
(function(githubSearcher) {

    var githubUserController = function(scope, log, location,routeParams,githubService) {

        var onUserComplete = function(data)
        {
            scope.user = data;
        };

        var onError = function(err) {
            log.info(err);
        };

        scope.username = routeParams.username;
        githubService
                .getUser(scope.username)
                .then(onUserComplete, onError);
    };

    githubUserController.$inject = ['$scope','$log','$location','$routeParams','githubService'];

    githubSearcher.controller("githubUserController", githubUserController);

}(angular.module('githubSearcher')));