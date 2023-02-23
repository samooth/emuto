"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StringParserRegExp = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint no-control-regex: 0 */
/* eslint no-useless-escape: 0 */
var keywords = ['null', 'true', 'false'];
var DoubleQuoteStringRegexp = /("(((?=\\)\\(["'\\\/bfnrt]|u[0-9a-fA-F]{4}))|[^"\\\0-\x1F\x7F]+)*")/;
var SingleQuoteStringRegexp = /('(((?=\\)\\(['"\\\/bfnrt]|u[0-9a-fA-F]{4}))|[^'\\\0-\x1F\x7F]+)*')/;
var StringParserRegExp = new RegExp("(".concat(DoubleQuoteStringRegexp.source, "|").concat(SingleQuoteStringRegexp.source, ")"));
exports.StringParserRegExp = StringParserRegExp;
var NumberParserRegExp = /(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/;
var options = [].concat(keywords, [StringParserRegExp.source, NumberParserRegExp.source]);
var _default = _parsimmon["default"].regex(new RegExp("(".concat(options.join('|'), ")"))).map(function (value) {
  return {
    name: 'primitive',
    value: value
  };
});
exports["default"] = _default;