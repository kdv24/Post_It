hackerNews.factory('ThreadsFactory', function ThreadsFactory() {
  var factory = {};
  factory.threads = [];
  factory.addThread = function() {
    factory.threads.push({ name: factory.threadName, id: factory.threads.length + 1, comments: [], url: factory.threadUrl });
    factory.threadName = null;
    factory.threadUrl = null;
  };
  return factory;
});
