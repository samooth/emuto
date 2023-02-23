"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _crap = _interopRequireDefault(require("./crap"));
var _primitive = require("./primitive");
var _identifier = _interopRequireDefault(require("./identifier"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var packList = function packList(x) {
  return {
    value: x,
    name: 'projection'
  };
};
var packProperty = function packProperty(x) {
  return {
    value: x,
    name: 'valueProp'
  };
};
var unpackOne = function unpackOne(projectable, projection) {
  switch (projection.name) {
    case 'projection':
      return {
        name: 'projection',
        value: {
          optional: projection.optional,
          left: projectable,
          right: projection.value.value
        }
      };
    case 'valueProp':
      return {
        name: 'valueProp',
        value: {
          optional: projection.value[0] === '?',
          left: projectable,
          right: projection.value[0] === '?' ? projection.value.slice(1) : projection.value
        }
      };
    default:
      return {
        name: 'objectProjection',
        value: {
          left: projectable,
          optional: false,
          right: projection.value
        }
      };
  }
};
var PropertyParser = _parsimmon["default"].regexp(/\??(\.[$A-Z_][0-9A-Z_$]*)+/i).map(packProperty);
var ObjectProjectionParser = _parsimmon["default"].lazy(function () {
  var SimpleItemParser = _parsimmon["default"].alt(_parsimmon["default"].regex(_primitive.StringParserRegExp).map(function (value) {
    return value.slice(1, -1);
  }), _identifier["default"].map(function (_ref) {
    var value = _ref.value;
    return value;
  })).map(function (value) {
    return {
      type: 'SimpleItem',
      value: value
    };
  });
  var RecursiveItemParser = _parsimmon["default"].seq(SimpleItemParser, _crap["default"].then(ObjectProjectionParser.atMost(1))).map(function (segments) {
    return segments[1].length === 0 ? segments[0] : {
      type: 'RecursiveItem',
      name: segments[0].value,
      value: segments[1][0]
    };
  });
  var AliasParser = _parsimmon["default"].seq(SimpleItemParser, _parsimmon["default"].string(':').trim(_crap["default"]));
  var AliasableItemParser = _parsimmon["default"].seq(AliasParser.atMost(1), RecursiveItemParser).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      alias = _ref3[0],
      item = _ref3[1];
    return alias.length === 1 ? _objectSpread(_objectSpread({}, item), {}, {
      alias: alias[0][0].value
    }) : item;
  });
  var FragmentParser = _parsimmon["default"].string('...').then(_crap["default"]).then(_identifier["default"]).map(function (value) {
    return {
      type: 'FragmentItem',
      value: value.value
    };
  });
  return _parsimmon["default"].sepBy(_parsimmon["default"].alt(AliasableItemParser, FragmentParser), _parsimmon["default"].string(',').atMost(1).trim(_crap["default"])).wrap(_parsimmon["default"].string('{').then(_crap["default"]), _crap["default"].then(_parsimmon["default"].string('}'))).map(function (value) {
    return {
      name: 'objectProjection',
      value: value
    };
  });
});
var unpack = function unpack(_ref4) {
  var _ref5 = _slicedToArray(_ref4, 2),
    projectable = _ref5[0],
    projections = _ref5[1];
  return projections.reduce(unpackOne, projectable);
};
var SimpleProjectionParser = _parsimmon["default"].lazy(function () {
  var ListParser = require('./collections/list')["default"].map(packList);
  var SimpleProjectionParser = _parsimmon["default"].seq(_parsimmon["default"].string('?').atMost(1), ListParser).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      optional = _ref7[0],
      value = _ref7[1];
    return {
      name: 'projection',
      optional: optional.length === 1,
      value: value
    };
  });
  return SimpleProjectionParser;
});
var ProjectionParser = _parsimmon["default"].lazy(function () {
  var ProjectableParser = require('./projectable')["default"];
  return _parsimmon["default"].seq(ProjectableParser.skip(_crap["default"]), _parsimmon["default"].alt(SimpleProjectionParser, PropertyParser, ObjectProjectionParser).skip(_crap["default"]).many()).map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      left = _ref9[0],
      right = _ref9[1];
    return right.length === 0 ? left : unpack([left, right]);
  }).desc('projection');
});
var _default = ProjectionParser;
exports["default"] = _default;