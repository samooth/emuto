"use strict";

var _math = _interopRequireDefault(require("../math"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('multiplicative parser', function () {
  it('parses 42 / 22 * 12 / 3', function () {
    expect(_math["default"].parse('42 / 22 * 12 / 3').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_math["default"].parse('$/$').value).toMatchObject({
      name: 'binaryOperation',
      value: [{
        name: 'variable',
        value: '$'
      }, {
        name: 'primitive',
        value: '/'
      }, {
        name: 'variable',
        value: '$'
      }]
    });
  });
  it('returns correct value', function () {
    expect(_math["default"].parse('$*$ / 4').value).toMatchObject({
      name: 'binaryOperation',
      value: [{
        name: 'variable',
        value: '$'
      }, {
        name: 'primitive',
        value: '*'
      }, {
        name: 'variable',
        value: '$'
      }, {
        name: 'primitive',
        value: '/'
      }, {
        name: 'primitive',
        value: '4'
      }]
    });
  });
});