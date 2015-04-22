hackerNews.controller('CommentsCtrl', function CommentsCtrl ($scope, $stateParams, ThreadsFactory, UtilitiesFactory){
  console.log("made it to commentsCtrl");
  $scope.thread = UtilitiesFactory.findById(ThreadsFactory.threads, $stateParams.threadId)
  $scope.addComment = function () {
    $scope.thread.comments.push({ text: $scope.commentText });
    $scope.commentText = null;
  }
});
