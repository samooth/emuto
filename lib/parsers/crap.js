"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NotNewline = _parsimmon["default"].regexp(/[^\n]*/);
var Comment = NotNewline.wrap(_parsimmon["default"].alt(_parsimmon["default"].string('//'), _parsimmon["default"].string('#')), _parsimmon["default"].string('\n'));
var Whitespace = _parsimmon["default"].regexp(/[ \n]*/);
var _default = Comment.sepBy(Whitespace).trim(Whitespace);
exports["default"] = _default;