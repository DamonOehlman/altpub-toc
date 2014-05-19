var toc = require('../');

toc.load(path.resolve(__dirname, 'Book.txt'), function(err, entries) {
  if (err) {
    return console.error(err);
  }

  console.log('loaded entries from book toc: ', entries);
});
