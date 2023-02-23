"use strict";

var _pipe = _interopRequireDefault(require("../pipe"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('pipe generator', function () {
  it('generates correct code', function () {
    expect((0, _pipe["default"])({
      name: 'pipe',
      value: {
        left: {
          name: 'variable',
          value: '$'
        },
        right: {
          name: 'primitive',
          value: 'false'
        }
      }
    })).toEqual('(function (input) {return false})(input)');
  });
  it('generates correct code 2', function () {
    expect((0, _pipe["default"])({
      name: 'pipe',
      value: {
        left: {
          name: 'primitive',
          value: 'true'
        },
        right: {
          name: 'primitive',
          value: 'null'
        }
      }
    })).toEqual('(function (input) {return null})(true)');
  });
});