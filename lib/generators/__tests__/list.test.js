"use strict";

var _list = _interopRequireDefault(require("../list"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var segment = {
  name: 'simpleList',
  value: [{
    name: 'variable',
    value: '$'
  }, {
    name: 'variable',
    value: '$'
  }, {
    name: 'list',
    value: [{
      name: 'simpleList',
      value: [{
        name: 'primitive',
        value: 'null'
      }]
    }]
  }]
};
describe('list generator', function () {
  it('generates correct code', function () {
    expect((0, _list["default"])({
      name: 'list',
      value: [segment]
    })).toEqual('[].concat(_.__spread__([input, input, [].concat(_.__spread__([null]))]))');
  });
  it('generates correct code - spread', function () {
    expect((0, _list["default"])({
      name: 'list',
      value: [segment, {
        name: 'spread',
        value: {
          name: 'variable',
          value: '$'
        }
      }, {
        name: 'spread',
        value: {
          name: 'variable',
          value: '$'
        }
      }]
    })).toEqual('[].concat(_.__spread__([input, input, [].concat(_.__spread__([null]))])).concat(_.__spread__(input)).concat(_.__spread__(input))');
  });
});