"use strict";

var _inputProp = _interopRequireDefault(require("../inputProp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('inputProp generator', function () {
  it('.foo', function () {
    expect((0, _inputProp["default"])({
      name: 'inputProp',
      value: '.foo'
    })).toEqual('input.foo');
  });
});