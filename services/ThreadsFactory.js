hackerNews.factory('ThreadsFactory', function ThreadsFactory() {
  var factory = {};
  factory.threads = [];
  factory.addThread = function() {
    factory.threads.push({ name: factory.threadName, id: factory.threads.length + 1, comments: [], url: factory.threadUrl, votes: 0, date: new Date(), ranking: 0, days: 0 });
    factory.threadName = null;
    factory.threadUrl = null;

    // var timePassed = setInterval(function() { this.days -= 10 }, 10000);
    // var ranking = (this.factory.threads.votes) + (timePassed);
    // if (this.factory.threads.ranking < 0) {
    //   var index = factory.threads.indexOf(thread);
    //   factory.threads.splice(index, 1);
    // }
  };

  factory.plusVote = function(item) {
    item.votes += 1;
  };

  factory.minusVote = function(item) {
    item.votes -= 1;
  };

  factory.checkThread = function(item) {
    var currentDate = new Date();
    var elapsedTime = currentDate - item.date;
    return elapsedTime < 10000;
  };


  return factory;
});
