var test = require('tape');
var load = require('../load');
var entries;

test('can load and parse a simple Book.txt file', function(t) {
  t.plan(2);
  load(__dirname + '/samples/simple.txt', function(err, e) {
    t.ifErr(err);
    t.ok(entries = e, 'got entries');
  });
});

test('we have two loaded entries', function(t) {
  t.plan(1);
  t.equal(entries.length, 2, 'got two entries');
});

test('entry names are what we expected', function(t) {
  t.plan(2);
  t.equal(entries[0], '00-Chapter1.md', 'ok');
  t.equal(entries[1], '01-Chapter2.md', 'ok');
});
