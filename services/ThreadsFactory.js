hackerNews.factory('ThreadsFactory', function ThreadsFactory() {
  var factory = {};
  factory.threads = [];
  factory.addThread = function() {
    factory.threads.push({ name: factory.threadName, id: factory.threads.length + 1, comments: [], url: factory.threadUrl, votes: 0, date: new Date() });
    factory.threadName = null;
    factory.threadUrl = null;
  };

  factory.plusVote = function(item) {
    item.votes += 1;
  };

  factory.minusVote = function(item) {
    item.votes -= 1;
  };

  return factory;
});
