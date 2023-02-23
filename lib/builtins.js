"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _combinationsGenerator = _interopRequireDefault(require("combinations-generator"));
var _cartesianProductGenerator = require("cartesian-product-generator");
var _lodash = _interopRequireDefault(require("lodash.merge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var convertUndefined = function convertUndefined(value) {
  return value === undefined ? null : value;
};
var handleOptional = function handleOptional(value, f) {
  return convertUndefined(value) === null ? null : f(value);
};
var length = function length(input) {
  return Array.isArray(input) ? input.length : Object.keys(input).length;
};
var parseJSON = JSON.parse;
var objectify = function objectify(input) {
  return input.reduce(function (a, b) {
    a[b[0]] = b[1];
    return a;
  }, {});
};
var handleProjectionItem = function handleProjectionItem(projectable) {
  return function (projectionRule) {
    return Number.isInteger(projectionRule) ? convertUndefined(projectable.slice(projectionRule)[0]) : Array.isArray(projectionRule) ? convertUndefined(projectable.slice.apply(projectable, _toConsumableArray(projectionRule))) : convertUndefined(projectable[projectionRule]);
  };
};
var __objectProjection__ = function __objectProjection__(left, right, optional, _) {
  var newObject = {};
  right.forEach(function (rule) {
    var key;
    var finalKey;
    if (rule.type === 'SimpleItem') {
      key = rule.value;
      finalKey = rule.alias || key;
      if (key in left) {
        newObject[finalKey] = left[key];
      } else {
        newObject[finalKey] = null;
      }
    }
    if (rule.type === 'FragmentItem') {
      Object.assign(newObject, _[rule.value](left));
    }
    if (rule.type === 'RecursiveItem') {
      key = rule.name;
      finalKey = rule.alias || key;
      var rules = rule.value.value;
      if (key in left) {
        newObject[finalKey] = __objectProjection__(left[key], rules, false, _);
      } else {
        newObject[finalKey] = null;
      }
    }
  });
  return newObject;
};
var handleProjection = function handleProjection(projectable) {
  return function (projectionRules) {
    return projectionRules.map(handleProjectionItem(projectable));
  };
};
var _default = {
  objectify: objectify,
  __opt__: handleOptional,
  __spread__: function __spread__(input) {
    return Array.isArray(input) ? input : typeof input === 'string' || input instanceof String ? input.split('') : Object.entries(input);
  },
  projection: function projection(left, right, optinal) {
    return right.length === 1 ? handleOptional(left, function () {
      return handleProjection(left)(right)[0];
    }) : handleOptional(left, function () {
      return handleProjection(left)(right);
    });
  },
  __objectProjection__: __objectProjection__,
  split: function split(separator) {
    return function (input) {
      return input.split(separator);
    };
  },
  join: function join(separator) {
    return function (input) {
      return input.join(separator);
    };
  },
  map: function map(f) {
    return function (input) {
      return Array.isArray(input) ? input.map(f) : objectify(
      // eslint-disable-next-line no-use-before-define
      Object.entries(input).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return f(key)(value);
      }));
    };
  },
  sortBy: function sortBy(f) {
    return function (input) {
      return input.slice().sort(function (a, b) {
        return f(a) < f(b) ? -1 : f(a) > f(b) ? 1 : 0;
      });
    };
  },
  has: function has(key) {
    return function (input) {
      return key in input;
    };
  },
  filter: function filter(f) {
    return function (input) {
      return input.filter(f);
    };
  },
  get: function get(variable) {
    return this[variable];
  },
  __assign__: function __assign__(variable, value, context) {
    return Object.assign({}, context, _defineProperty({}, variable, value));
  },
  reverse: function reverse(input) {
    return input.slice().reverse();
  },
  reduce: function reduce(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      f = _ref4[0],
      x = _ref4[1];
    return function (input) {
      return input.reduce(function (a, b) {
        return f(a)(b);
      }, x);
    };
  },
  length: length,
  size: length,
  keys: function keys(input) {
    return Object.keys(input);
  },
  values: function values(input) {
    return Object.values(input);
  },
  entries: function entries(input) {
    return Object.entries(input);
  },
  combinations: function combinations(r) {
    return function (input) {
      return Array.from((0, _combinationsGenerator["default"])(input, r));
    };
  },
  product: function product(input) {
    return Array.from(_cartesianProductGenerator.product.apply(void 0, _toConsumableArray(input)));
  },
  error: function error(message) {
    return function (input) {
      throw new Error(message);
    };
  },
  parseJSON: parseJSON,
  update: function update(updateWith) {
    return function (input) {
      return (0, _lodash["default"])(input, updateWith);
    };
  }
};
exports["default"] = _default;