"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _collection = _interopRequireDefault(require("../abstract/collection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = (0, _collection["default"])({
  name: 'list',
  open: '[',
  close: ']'
});
exports["default"] = _default;