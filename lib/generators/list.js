"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CompileListSegmentItem = function CompileListSegmentItem(item) {
  var Generator = require('./generator')["default"];
  return Generator(item);
};
var CompileSimpleListSegment = function CompileSimpleListSegment(segment) {
  return "[".concat(segment.value.map(CompileListSegmentItem).join(', '), "]");
};
var CompileListSegment = function CompileListSegment(segment) {
  return segment.name === 'simpleList' ? CompileSimpleListSegment(segment) : CompileListSegmentItem(segment.value);
};
var CompileListSegments = function CompileListSegments(segments) {
  return segments.reduce(function (a, b) {
    return "".concat(a, ".concat(_.__spread__(").concat(CompileListSegment(b), "))");
  }, '');
};
var _default = function _default(_ref) {
  var value = _ref.value;
  return "[]".concat(CompileListSegments(value));
};
exports["default"] = _default;