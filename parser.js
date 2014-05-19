// define a few regexes
var reCommentLine = /^\#/;
var reLineBreak = /\n\r?/;
var reSection = /\:$/;

module.exports = function(content) {
  var section;
  var lines = content.split(reLineBreak).map(function(line) {
    return line.trim();
  }).filter(Boolean);

  // initialise the toc
  var toc = section = [];

  function activateSection(sectionName) {
    if (sectionName === 'mainmatter') {
      return section = toc;
    }

    // ensure the section array exists
    toc[sectionName] = toc[sectionName] || [];
    return section = toc[sectionName];
  }

  // iterate through the lines and create the content
  lines.forEach(function(line) {
    // if we have a comment line do nothing
    if (reCommentLine.test(line)) {
      return;
    }
    else if (reSection.test(line)) {
      return activateSection(line.slice(0, -1));
    }
    else {
      section.push(line);
    }
  });

  return toc;
};
