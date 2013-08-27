module.exports = function (array, iterator, callback) {
  var results = [];
  var completed = 0;
  var len = array.length;
  var complete;
  var iterate;

  complete = function (err, result) {
    if (err) {
      callback(err);
      callback = function () {};
      return;
    }
    results[completed] = result;
    completed += 1;
    if (completed === len) {
      callback(err, results);
      return;
    }
    iterate();
  };

  iterate = function () {
    iterator(array[completed], complete);
  };

  iterate();
};
