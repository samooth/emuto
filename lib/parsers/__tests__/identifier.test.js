"use strict";

var _identifier = _interopRequireDefault(require("../identifier"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('identifier parser', function () {
  it('parses foobar_123', function () {
    expect(_identifier["default"].parse('foobar_123').status).toBe(true);
  });
  it('parses false_', function () {
    expect(_identifier["default"].parse('false_').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_identifier["default"].parse('foobar_123').value).toEqual({
      name: 'identifier',
      value: 'foobar_123'
    });
  });
  it('does not parse $', function () {
    expect(_identifier["default"].parse('$').status).toBe(false);
  });
  it('does not parse $bar', function () {
    expect(_identifier["default"].parse('$bar').status).toBe(false);
  });
  it('does not parse 0foo', function () {
    expect(_identifier["default"].parse('0foo').status).toBe(false);
  });
  it('does not parse false', function () {
    expect(_identifier["default"].parse('false').status).toBe(false);
  });
  it('does not parse true', function () {
    expect(_identifier["default"].parse('true').status).toBe(false);
  });
  it('does not parse null', function () {
    expect(_identifier["default"].parse('null').status).toBe(false);
  });
  it('does not parse if', function () {
    expect(_identifier["default"].parse('if').status).toBe(false);
  });
});