"use strict";

var fs = require('fs');
var path = require('path');
var exclude = ['__tests__', 'abstract', 'tuple', 'primitives', 'operand.js', 'collectionCore.js', 'crap.js', 'functionCall.js', 'parser.js', 'primitive.js', 'value.js', 'section.js', 'projectable.js', 'program.js', 'operators', 'collections', 'pipe.js', 'ternary.js', 'mapFunctionCall.js', 'math'];
var files = fs.readdirSync(path.join(__dirname, '..', 'parsers')).filter(function (item) {
  return !exclude.includes(item);
});
describe('descriptions', function () {
  files.forEach(function (fileName) {
    var parserName = fileName.slice(0, -3);
    var moduleName = "../parsers/".concat(parserName);
    // $FlowFixMe
    var parser = require(moduleName)["default"]._;
    var options = parser('¡').expected;
    it(parserName, function () {
      expect(options[0]).toEqual(parserName);
    });
  });
});