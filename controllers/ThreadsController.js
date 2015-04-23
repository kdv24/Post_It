hackerNews.controller('ThreadsCtrl', function ThreadsCtrl($scope, ThreadsFactory) {
  $scope.threads = ThreadsFactory.threads;
  $scope.ThreadsFactory = ThreadsFactory;

  $scope.addThread = function() {
    var name = $scope.threadName;
    var url = $scope.threadUrl;
    $scope.ThreadsFactory.addThread(name, url);
    $scope.threadName = null;
    $scope.threadUrl = null;
  };
//Error: Cannot read property 'votes' of undefined
  // $scope.plusVote = function() {
  //   var item = $scope.item;
  //   $scope.ThreadsFactory.plusVote(item);
  // };
  // $scope.minusVote = function() {
  //   var item = $scope.item;
  //   $scope.ThreadsFactory.minusVote(item);
  // };
});
