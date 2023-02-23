"use strict";

var _parser = _interopRequireDefault(require("../parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
jest.mock('../program', function () {
  return {
    parse: function parse() {
      return {
        status: false,
        index: {
          line: 1,
          column: 1
        },
        expected: ["'foo'", "'bar'"],
        value: {
          name: 'primitive',
          value: 'null'
        }
      };
    }
  };
});
describe('parser', function () {
  it('throws on syntax error', function () {
    expect(function () {
      (0, _parser["default"])('¡');
    }).toThrow();
  });
  it('throws syntax error', function () {
    try {
      (0, _parser["default"])('¡');
    } catch (e) {
      expect(e).toBeInstanceOf(SyntaxError);
    }
  });
  it('throws correct line number error', function () {
    try {
      (0, _parser["default"])('¡');
    } catch (e) {
      expect(e.lineNumber).toEqual(1);
    }
  });
  it('throws correct column number error', function () {
    try {
      (0, _parser["default"])('¡');
    } catch (e) {
      expect(e.columnNumber).toEqual(1);
    }
  });
  it('throws correct message', function () {
    try {
      (0, _parser["default"])('¡foo123456789');
    } catch (e) {
      expect(e.message).toEqual("Expected 'foo' or 'bar' on line 1 column 1, found '¡foo123456' instead");
    }
  });
});