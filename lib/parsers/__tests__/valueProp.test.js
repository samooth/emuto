"use strict";

var _projection = _interopRequireDefault(require("../projection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('valueProp parser', function () {
  it('parses .bar.foo', function () {
    expect(_projection["default"].parse('.bar.foo').status).toBe(true);
  });
  it('parses .false.true.boo', function () {
    expect(_projection["default"].parse('.false.true.boo').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_projection["default"].parse('.foo.bar').value).toMatchObject({
      name: 'valueProp',
      value: {
        left: {
          name: 'inputProp',
          value: '.foo'
        },
        right: '.bar'
      }
    });
  });
});