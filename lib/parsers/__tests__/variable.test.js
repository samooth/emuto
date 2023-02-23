"use strict";

var _variable = _interopRequireDefault(require("../variable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('variable parser', function () {
  it('parses $variable', function () {
    expect(_variable["default"].parse('$variable').status).toBe(true);
  });
  it('parses $', function () {
    expect(_variable["default"].parse('$').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_variable["default"].parse('$foo').value).toMatchObject({
      name: 'variable',
      value: '$foo'
    });
  });
  it('returns correct value', function () {
    expect(_variable["default"].parse('$').value).toMatchObject({
      name: 'variable',
      value: '$'
    });
  });
});