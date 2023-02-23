"use strict";

var _pipe = _interopRequireDefault(require("../pipe"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var codeExamples = ['$ | false', '.asd|.fgh'];
describe('pipe parser', function () {
  it('returns correct value', function () {
    expect(_pipe["default"].parse(codeExamples[0]).value).toMatchObject({
      name: 'pipe',
      value: {
        left: {
          name: 'variable',
          value: '$'
        },
        right: {
          name: 'primitive',
          value: 'false'
        }
      }
    });
  });
  codeExamples.forEach(function (codeExample) {
    it('parses code example', function () {
      expect(_pipe["default"].parse(codeExample).status).toBe(true);
    });
  });
});