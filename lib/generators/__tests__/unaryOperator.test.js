"use strict";

var _unaryOperator = _interopRequireDefault(require("../unaryOperator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('unaryOperator generator', function () {
  it('generates correct code', function () {
    expect((0, _unaryOperator["default"])({
      name: 'unaryOperator',
      value: {
        operator: {
          value: '-'
        },
        operand: {
          name: 'primitive',
          value: '4'
        }
      }
    })).toEqual('(-(4))');
  });
});