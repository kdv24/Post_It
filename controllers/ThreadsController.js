hackerNews.controller('ThreadsCtrl', function ThreadsCtrl($scope, ThreadsFactory) {
  $scope.threads = ThreadsFactory.threads;
  $scope.ThreadsFactory = ThreadsFactory;
});
