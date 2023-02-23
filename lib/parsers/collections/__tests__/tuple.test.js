"use strict";

var _tuple = _interopRequireDefault(require("../tuple"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('tuple parser', function () {
  it('parses true : null', function () {
    expect(_tuple["default"].parse('true : null').status).toBe(true);
  });
  it('parses false: true', function () {
    expect(_tuple["default"].parse('false: true').status).toBe(true);
  });
  it('returns correct value 1', function () {
    expect(_tuple["default"].parse('true: false').value).toEqual({
      name: 'tuple',
      value: [{
        name: 'primitive',
        value: 'true'
      }, {
        name: 'primitive',
        value: 'false'
      }]
    });
  });
  it('returns correct value 2', function () {
    expect(_tuple["default"].parse('null: null').value).toEqual({
      name: 'tuple',
      value: [{
        name: 'primitive',
        value: 'null'
      }, {
        name: 'primitive',
        value: 'null'
      }]
    });
  });
  it('returns primitive', function () {
    expect(_tuple["default"].parse('null').value).toEqual({
      name: 'primitive',
      value: 'null'
    });
  });
});