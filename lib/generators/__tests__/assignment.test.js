"use strict";

var _assignment = _interopRequireDefault(require("../assignment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('assignment generator', function () {
  it('generates correct output', function () {
    var x = {
      name: 'binaryOperation',
      value: [{
        name: 'primitive',
        value: '3'
      }, {
        name: 'primitive',
        value: '+'
      }, {
        name: 'primitive',
        value: '4'
      }]
    };
    expect((0, _assignment["default"])(function () {
      return '3 + 4';
    })({
      name: 'assignment',
      value: {
        assignments: [[{
          name: 'primitive',
          value: 'a34234'
        }, {
          name: 'parentheses',
          value: x
        }], [{
          name: 'primitive',
          value: 'a'
        }, {
          name: 'parentheses',
          value: x
        }]],
        program: x
      }
    })).toEqual("((function() {_ = _.__assign__('a34234', (3 + 4), _); _ = _.__assign__('a', (3 + 4), _); return (3 + 4)})())");
  });
});