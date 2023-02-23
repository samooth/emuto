"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _program = _interopRequireDefault(require("./program"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default(sourceCode) {
  var results = _program["default"].parse(sourceCode);
  if (!results.status) {
    var badPart = sourceCode.split('\n')[results.index.line - 1].slice(results.index.column - 1, results.index.column + 9);
    var error = new SyntaxError();
    error.lineNumber = results.index.line;
    error.columnNumber = results.index.column;
    error.message = "Expected ".concat(results.expected.join(' or '), " on line ").concat(results.index.line, " column ").concat(results.index.column, ", found '").concat(badPart, "' instead");
    throw error;
  }
  return results;
};
exports["default"] = _default;