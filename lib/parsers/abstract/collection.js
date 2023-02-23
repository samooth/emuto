"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _collectionCore = _interopRequireDefault(require("../collections/collectionCore"));
var _crap = _interopRequireDefault(require("../crap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default(_ref) {
  var name = _ref.name,
    open = _ref.open,
    close = _ref.close;
  return _collectionCore["default"].trim(_crap["default"]).wrap(_parsimmon["default"].string(open), _parsimmon["default"].string(close)).map(function (value) {
    return value.value;
  }).node(name).desc(name);
};
exports["default"] = _default;