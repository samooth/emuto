"use strict";

var _variable = _interopRequireDefault(require("../variable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('variable generator', function () {
  it('null', function () {
    expect((0, _variable["default"])({
      name: 'variable',
      value: '$null'
    })).toEqual('_.get(\'null\')');
  });
  it('false', function () {
    expect((0, _variable["default"])({
      name: 'variable',
      value: '$false'
    })).toEqual('_.get(\'false\')');
  });
  it('input', function () {
    expect((0, _variable["default"])({
      name: 'variable',
      value: '$'
    })).toEqual('input');
  });
});