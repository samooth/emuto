"use strict";

var _object = _interopRequireDefault(require("../object"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('object generator', function () {
  it('generates correct code', function () {
    expect((0, _object["default"])({
      name: 'object',
      value: [{
        name: 'simpleList',
        value: [{
          name: 'tuple',
          value: [{
            name: 'primitive',
            value: '"foo"'
          }, {
            name: 'primitive',
            value: '"bar"'
          }]
        }, {
          name: 'tuple',
          value: [{
            name: 'primitive',
            value: '"baz"'
          }, {
            name: 'primitive',
            value: '4'
          }]
        }]
      }, {
        name: 'spread',
        value: {
          name: 'variable',
          value: '$'
        }
      }]
    })).toEqual('(_.objectify([].concat(_.__spread__([["foo","bar"], ["baz",4]])).concat(_.__spread__(input))))');
  });
});