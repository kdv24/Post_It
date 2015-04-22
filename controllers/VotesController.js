hackerNews.controller('VotesCtrl', function VotesCtrl ($scope, $stateParams, ThreadsFactory, UtilitiesFactory){
  $scope.thread = UtilitiesFactory.findById(ThreadsFactory.threads, $stateParams.threadId)
  $scope.addVotes = function() {


      $scope.thread.votes.push({ vote: $scope.threadVote });
  }
});
