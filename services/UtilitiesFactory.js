hackerNews.factory('UtilitiesFactory', function UtilitiesFactory() {
  var factory = {};
  factory.findById = function(collection, id) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].id == id) {
        return collection[i];
      }
    }
    return null;
  };

  // factory.plusVote = function() {
  //   debugger;
  //   $scope.thread = UtilitiesFactory.findById(ThreadsFactory.threads, $stateParams.threadId);
  //   currentThread.votes += 1;
  //   console.log("Votes" + currentThread.votes);
  // };

  return factory;
});
