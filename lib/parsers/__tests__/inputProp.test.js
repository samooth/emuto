"use strict";

var _inputProp = _interopRequireDefault(require("../inputProp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('. parser', function () {
  it('parses .bar', function () {
    expect(_inputProp["default"].parse('.bar').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_inputProp["default"].parse('.foo').value).toEqual({
      name: 'inputProp',
      value: '.foo'
    });
  });
  it('returns correct value 2', function () {
    expect(_inputProp["default"].parse('.bar4').value).toEqual({
      name: 'inputProp',
      value: '.bar4'
    });
  });
});