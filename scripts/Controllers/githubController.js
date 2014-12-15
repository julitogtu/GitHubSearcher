/**
 * Created by NinjaDev
 */
(function(githubSearcher) {

    var githubController = function(scope, log, location,githubService) {

        var onSearchComplete = function(data)
        {
            scope.list = data.items;
            if(data.total_count > 1000)
                scope.totalResults = 1000;
            else
                scope.totalResults = data.total_count;

            scope.totalPage = scope.totalResults/scope.pageSize;
            scope.pages = [];
            for(var i = 1; i <= scope.totalPage; i++)
            {
                scope.pages.push(i);
            }
        };

        var onError = function(err) {
            log.info(err);
        };

        scope.search = function(topic){
            githubService
                        .getResult(topic, scope.page,scope.pageSize)
                        .then(onSearchComplete, onError);
        };

        scope.userDetails = function (username) {
            location.path("/user/" + username);
        };

        scope.topic = "";
        scope.username = "";
        scope.order = "+owner.login";
        scope.page = 1;
        scope.pageSize = 30;
    };

    githubController.$inject = ['$scope','$log','$location','githubService'];

    githubSearcher.controller("githubController", githubController);

}(angular.module('githubSearcher')));