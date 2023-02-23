"use strict";

var _primitive = _interopRequireDefault(require("../primitive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var testExample = function testExample(parser) {
  return function (example) {
    it('parses true', function () {
      expect(parser.parse(example).status).toBe(true);
    });
    it('returns correct value', function () {
      expect(parser.parse(example).value).toEqual({
        name: 'primitive',
        value: example
      });
    });
  };
};
var stringExamples = ['""', '"foo"', '"Fo ba\'r\' ²¡ü"', '\'asd "go" asd\''];
var numberExamples = ['3.14', '42', '0', '111.111', '0.33'];
var examples = [].concat(stringExamples, numberExamples);
describe('primitive parser', function () {
  examples.forEach(testExample(_primitive["default"]));
  it('parses true', function () {
    expect(_primitive["default"].parse('true').status).toBe(true);
  });
  it('parses false', function () {
    expect(_primitive["default"].parse('false').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_primitive["default"].parse('false').value).toEqual({
      name: 'primitive',
      value: 'false'
    });
  });
  it('parses null', function () {
    expect(_primitive["default"].parse('null').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_primitive["default"].parse('null').value).toEqual({
      name: 'primitive',
      value: 'null'
    });
  });
});