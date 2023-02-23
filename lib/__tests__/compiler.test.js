"use strict";

var _compiler = _interopRequireDefault(require("../compiler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var tests = [{
  input: 'null',
  output: '(function(_) { return (function(input) { return null})})'
}, {
  input: 'true',
  output: '(function(_) { return (function(input) { return true})})'
}, {
  input: '$',
  output: '(function(_) { return (function(input) { return input})})'
}, {
  input: '.hello',
  output: '(function(_) { return (function(input) { return input.hello})})'
}];
describe('compiler', function () {
  tests.forEach(function (_ref) {
    var input = _ref.input,
      output = _ref.output;
    it("compiles ".concat(input), function () {
      expect((0, _compiler["default"])(input)).toEqual(output);
    });
  });
});