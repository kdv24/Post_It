hackerNews.factory('ThreadsFactory', function ThreadsFactory() {
  var factory = {};
  factory.threads = [];
  factory.addThread = function(name, url) {
    this.threads.push({ name: name, url: url, id: factory.threads.length + 1, comments: [], votes: 0, date: new Date() });
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
    //10000 = 10 seconds
    return ((item.votes > -10) | (elapsedTime < 10000));
  };

  return factory;
});

//Using setInterval() to update ranking every day, not practical
    // var timePassed = setInterval(function() { this.days -= 10 }, 10000);
    // var ranking = (this.factory.threads.votes) + (timePassed);
    // if (this.factory.threads.ranking < 0) {
    //   var index = factory.threads.indexOf(thread);
    //   factory.threads.splice(index, 1);
    // }
