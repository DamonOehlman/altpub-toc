var fs = require('fs');
var parser = require('./parser');

module.exports = function(targetFile, callback) {
  fs.readFile(targetFile, { encoding: 'utf8' }, function(err, content) {
    if (err) {
      return callback(err);
    }

    callback(null, parser(content));
  });
};
