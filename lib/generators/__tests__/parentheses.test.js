"use strict";

var _parentheses = _interopRequireDefault(require("../parentheses"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('parentheses generator', function () {
  it('generates correct code', function () {
    expect((0, _parentheses["default"])({
      name: 'parentheses',
      value: {
        name: 'primitive',
        value: '"asd"'
      }
    })).toEqual('("asd")');
  });
});