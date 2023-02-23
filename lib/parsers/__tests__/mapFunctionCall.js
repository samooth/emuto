"use strict";

var _mapFunctionCall = _interopRequireDefault(require("../mapFunctionCall"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('functionCall parser', function () {
  it('doesnt parse ~', function () {
    expect(_mapFunctionCall["default"].parse('~').status).toBe(false);
  });
  it('parses ~ 4', function () {
    expect(_mapFunctionCall["default"].parse('~ 4').status).toBe(true);
  });
  it('parses ~ $ + 3.1', function () {
    expect(_mapFunctionCall["default"].parse('~ $ + 3.1').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_mapFunctionCall["default"].parse('~ 4: "; "').value).toEqual({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'map'
        },
        right: {
          name: 'lambda',
          value: {
            variable: 'input',
            definition: {
              name: 'tuple',
              value: [{
                name: 'primitive',
                value: '4'
              }, {
                name: 'primitive',
                value: '"; "'
              }]
            }
          }
        }
      }
    });
  });
  it('returns correct value', function () {
    expect(_mapFunctionCall["default"].parse('~ ", ": "; "').value).toEqual({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'map'
        },
        right: {
          name: 'lambda',
          value: {
            variable: 'input',
            definition: {
              name: 'tuple',
              value: [{
                name: 'primitive',
                value: '", "'
              }, {
                name: 'primitive',
                value: '"; "'
              }]
            }
          }
        }
      }
    });
  });
});