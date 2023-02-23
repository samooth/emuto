"use strict";

var _ternary = _interopRequireDefault(require("../ternary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('ternary parser', function () {
  it('parses "Hello" + " World" if $hello >= 4 else null : false', function () {
    expect(_ternary["default"].parse('"Hello" + " World" if $hello >= 4 else null : false').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_ternary["default"].parse('0 if 1 else 2').value).toMatchObject({
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
    });
  });
  it('handles tuple correctly', function () {
    expect(_ternary["default"].parse('0').value).toMatchObject({
      name: 'primitive',
      value: '0'
    });
  });
});