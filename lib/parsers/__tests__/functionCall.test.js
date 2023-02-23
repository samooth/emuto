"use strict";

var _functionCall = _interopRequireDefault(require("../functionCall"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('functionCall parser', function () {
  it('parses join ", "', function () {
    expect(_functionCall["default"].parse('join ", "').status).toBe(true);
  });
  it('parses replace', function () {
    expect(_functionCall["default"].parse('replace').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_functionCall["default"].parse('replace ", ": "; "').value).toEqual({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'replace'
        },
        right: {
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
    });
  });
  it('returns correct value', function () {
    expect(_functionCall["default"].parse('reverse').value).toEqual({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'reverse'
        },
        right: null
      }
    });
  });
});