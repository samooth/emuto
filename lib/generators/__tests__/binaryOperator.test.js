"use strict";

var _binaryOperator = _interopRequireDefault(require("../binaryOperator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('binaryOperator generator', function () {
  it('generates correct code', function () {
    expect((0, _binaryOperator["default"])({
      name: 'additive',
      value: [{
        name: 'variable',
        value: '$'
      }, {
        name: 'primitive',
        value: '+'
      }, {
        name: 'variable',
        value: '$'
      }, {
        name: 'primitive',
        value: '-'
      }, {
        name: 'variable',
        value: '$'
      }]
    })).toEqual('input+input-input');
  });
});