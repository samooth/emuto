"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _crap = _interopRequireDefault(require("./crap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FunctionCallParser = _parsimmon["default"].lazy(function () {
  var TupleParser = require('./collections/tuple')["default"];
  return _parsimmon["default"].string('~').then(_crap["default"]).then(TupleParser).map(function (definition) {
    return {
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'map'
        },
        right: {
          name: 'lambda',
          value: {
            variable: 'input',
            definition: definition
          }
        }
      }
    };
  });
});
var _default = FunctionCallParser;
exports["default"] = _default;