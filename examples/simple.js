var path = require('path');
var toc = require('../');

toc.load(path.resolve(__dirname, 'Book.txt'), function(err, entries) {
  if (err) {
    return console.error(err);
  }

  entries.forEach(function(entry) {
    console.log('in toc: ' + entry);
  });
});
