# altpub-toc

A leanpub compatible table of contents (Book.txt) file reader. This
module provides the ability to parse a leanpub (or similar) TOC file for
some alternative local rendering.


[![NPM](https://nodei.co/npm/altpub-toc.png)](https://nodei.co/npm/altpub-toc/)

[![experimental](https://img.shields.io/badge/stability-experimental-red.svg)](https://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/DamonOehlman/altpub-toc.svg?branch=master)](https://travis-ci.org/DamonOehlman/altpub-toc) 

## Example Usage

```js
var path = require('path');
var toc = require('altpub-toc');

toc.load(path.resolve(__dirname, 'Book.txt'), function(err, entries) {
  if (err) {
    return console.error(err);
  }

  entries.forEach(function(entry) {
    console.log('in toc: ' + entry);
  });
});

```

## License(s)

### ISC

Copyright (c) 2014, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
