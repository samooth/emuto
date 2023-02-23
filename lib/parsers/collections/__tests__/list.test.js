"use strict";

var _list = _interopRequireDefault(require("../list"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('list parser', function () {
  it('parses [null  , false]', function () {
    expect(_list["default"].parse('[null  , false]').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_list["default"].parse('[$,$]').value).toMatchObject({
      name: 'list',
      value: [{
        name: 'simpleList',
        value: [{
          name: 'variable',
          value: '$'
        }, {
          name: 'variable',
          value: '$'
        }]
      }]
    });
  });
  it('returns correct value', function () {
    expect(_list["default"].parse('[$,$, null]').value).toMatchObject({
      name: 'list',
      value: [{
        name: 'simpleList',
        value: [{
          name: 'variable',
          value: '$'
        }, {
          name: 'variable',
          value: '$'
        }, {
          name: 'primitive',
          value: 'null'
        }]
      }]
    });
  });
});