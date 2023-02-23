"use strict";

var _ternary = _interopRequireDefault(require("../ternary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('ternary generator', function () {
  it('generates correct code', function () {
    expect((0, _ternary["default"])({
      name: 'ternary',
      value: {
        left: {
          name: 'primitive',
          value: '0'
        },
        middle: {
          name: 'primitive',
          value: '1'
        },
        right: {
          name: 'primitive',
          value: '2'
        }
      }
    })).toEqual('((1) ? (0) : (2))');
  });
});