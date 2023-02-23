"use strict";

var _unaryOperator = _interopRequireDefault(require("../unaryOperator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('multiplicative parser', function () {
  it('parses "Hello"', function () {
    expect(_unaryOperator["default"].parse('"Hello"').status).toBe(true);
  });
  it('parses 5', function () {
    expect(_unaryOperator["default"].parse('5').status).toBe(true);
  });
  it('parses -5', function () {
    expect(_unaryOperator["default"].parse('-5').status).toBe(true);
  });
  it('parses -(5)', function () {
    expect(_unaryOperator["default"].parse('-(5)').status).toBe(true);
  });
  it('parses !false', function () {
    expect(_unaryOperator["default"].parse('!false').status).toBe(true);
  });
  it('parses !!true', function () {
    expect(_unaryOperator["default"].parse('!!true').status).toBe(true);
  });
  it('parses ! ! true', function () {
    expect(_unaryOperator["default"].parse('!!true').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_unaryOperator["default"].parse('5').value).toEqual({
      name: 'primitive',
      value: '5'
    });
  });
});