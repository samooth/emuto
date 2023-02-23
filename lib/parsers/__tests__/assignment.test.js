"use strict";

var _assignment = _interopRequireDefault(require("../assignment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('assignment parser', function () {
  it('parses where $variable = ("foo": "bar")', function () {
    expect(_assignment["default"].parse('$variable where $variable = ("foo": "bar")').status).toBe(true);
  });
  it('parses where $variable = ("foo": "bar") $two = 2', function () {
    expect(_assignment["default"].parse('$variable where $variable = ("foo": "bar") $two = 2').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_assignment["default"].parse('44 where $a34234 = (5 + 4) $x = (5 * 4)').value).toMatchObject({
      name: 'assignment',
      value: {
        program: {
          name: 'primitive',
          value: '44'
        },
        assignments: [[{
          name: 'identifier',
          value: 'a34234'
        }, {
          name: 'parentheses',
          value: {
            name: 'binaryOperation',
            value: [{
              name: 'primitive',
              value: '5'
            }, {
              name: 'primitive',
              value: '+'
            }, {
              name: 'primitive',
              value: '4'
            }]
          }
        }], [{
          name: 'identifier',
          value: 'x'
        }, {
          name: 'parentheses',
          value: {
            name: 'binaryOperation',
            value: [{
              name: 'primitive',
              value: '5'
            }, {
              name: 'primitive',
              value: '*'
            }, {
              name: 'primitive',
              value: '4'
            }]
          }
        }]]
      }
    });
  });
});