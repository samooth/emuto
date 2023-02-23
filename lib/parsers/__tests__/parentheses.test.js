"use strict";

var _parentheses = _interopRequireDefault(require("../parentheses"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('parentheses parser', function () {
  it('parses ("foo" | "bar")', function () {
    expect(_parentheses["default"].parse('("foo" | "bar")').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_parentheses["default"].parse('("Hello World")').value).toEqual({
      name: 'parentheses',
      value: {
        name: 'primitive',
        value: '"Hello World"'
      }
    });
  });
});