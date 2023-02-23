"use strict";

var _lambda = _interopRequireDefault(require("../lambda"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('lambda parser', function () {
  it('parses correct string - syntax 1', function () {
    expect(_lambda["default"].parse('$ => 3 + 4').status).toBe(true);
    expect(_lambda["default"].parse('$ => 1').status).toBe(true);
  });
  it('parses correct string - syntax 1 - custom variable name', function () {
    expect(_lambda["default"].parse('$foo => $foo').status).toBe(true);
    expect(_lambda["default"].parse('$bar => $baz => "Hello" + $bar + $baz').status).toBe(true);
  });
  it('parses correct string - syntax 2', function () {
    expect(_lambda["default"].parse('\\3 + 4').status).toBe(true);
    expect(_lambda["default"].parse('\\1').status).toBe(true);
  });
  it('returns correct string', function () {
    expect(_lambda["default"].parse('$ => 4').value).toMatchObject({
      name: 'lambda',
      value: {
        variable: 'input',
        definition: {
          name: 'primitive',
          value: '4'
        }
      }
    });
  });
  it('returns correct string - custom variable name', function () {
    expect(_lambda["default"].parse('$foo => 4').value).toMatchObject({
      name: 'lambda',
      value: {
        variable: 'foo',
        definition: {
          name: 'primitive',
          value: '4'
        }
      }
    });
  });
});