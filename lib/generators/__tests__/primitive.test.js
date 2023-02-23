"use strict";

var _primitive = _interopRequireDefault(require("../primitive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('primitive generator', function () {
  it('null', function () {
    expect((0, _primitive["default"])({
      name: 'primitive',
      value: 'null'
    })).toEqual('null');
  });
  it('false', function () {
    expect((0, _primitive["default"])({
      name: 'primitive',
      value: 'false'
    })).toEqual('false');
  });
});