var hackerNews = angular.module('hackerNews', ['ui.router']);

hackerNews.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'ThreadsCtrl'
  });

  $stateProvider.state('threads.comments', {
    url: "/:threadId",
    templateUrl: "partials/threads.comments.html",
    controller: "CommentsCtrl"
  });
});
