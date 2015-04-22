var hackerNews = angular.module('hackerNews', ['ui.router']);

hackerNews.config(function($stateProvider) {
  $stateProvider.state('threads', {
    url: "",
    templateUrl: "partials/threads.html",
    controller: 'ThreadsCtrl'
  });

//'threads.comments' refers to the comments controller which is
  //nested INSIDE the threads controller
  $stateProvider.state('threads.comments', {
    url: "/:threadId",
    templateUrl: "partials/threads.comments.html",
    controller: "CommentsCtrl"
  });
});
