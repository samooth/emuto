"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _crap = _interopRequireDefault(require("../crap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SeparatorParser = _parsimmon["default"].string(',').trim(_crap["default"]);
var CollectionCoreLiteralParser = _parsimmon["default"].lazy(function () {
  var TupleParser = require('./tuple')["default"];
  var SpreadParser = _parsimmon["default"].string('...').then(_crap["default"]).then(TupleParser).node('spread');
  var SimpleListParser = _parsimmon["default"].sepBy(TupleParser, SeparatorParser).node('simpleList');
  return _parsimmon["default"].sepBy(_parsimmon["default"].alt(SpreadParser, SimpleListParser), SeparatorParser).map(function (value) {
    return {
      name: 'collectionCore',
      value: value
    };
  });
});
var ComprehensionParser = _parsimmon["default"].lazy(function () {
  var TupleParser = require('./tuple')["default"];
  var ProgramParser = require('../program')["default"];
  return _parsimmon["default"].seq(_parsimmon["default"].string('each').then(_crap["default"]).then(TupleParser), _crap["default"].then(_parsimmon["default"].string('in')).then(_crap["default"].then(TupleParser)), _crap["default"].then(_parsimmon["default"].string('if')).then(_crap["default"].then(TupleParser)).atMost(1), _crap["default"].then(ProgramParser).atMost(1)).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 4),
      left = _ref2[0],
      middle = _ref2[1],
      condition = _ref2[2],
      right = _ref2[3];
    var extractionPart = right.length === 1 ? {
      name: 'pipe',
      value: {
        left: middle,
        right: right[0]
      }
    } : middle;
    var extractionPartWithOptionalCondition = condition.length === 1 ? {
      name: 'pipe',
      value: {
        left: extractionPart,
        right: {
          name: 'functionCall',
          value: {
            left: {
              name: 'identifier',
              value: 'filter'
            },
            right: {
              name: 'lambda',
              value: {
                variable: 'input',
                definition: condition[0]
              }
            }
          }
        }
      }
    } : extractionPart;
    var mapPart = {
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
            definition: left
          }
        }
      }
    };
    return {
      name: 'collectionCore',
      value: [{
        name: 'spread',
        value: {
          name: 'parentheses',
          value: {
            name: 'pipe',
            value: {
              left: extractionPartWithOptionalCondition,
              right: mapPart
            }
          }
        }
      }]
    };
  });
});
var _default = _parsimmon["default"].alt(ComprehensionParser, CollectionCoreLiteralParser);
exports["default"] = _default;