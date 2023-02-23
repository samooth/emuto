"use strict";

var _object = _interopRequireDefault(require("../collections/object"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('object parser', function () {
  it('parses {"foo": 1, "bar": null}', function () {
    expect(_object["default"].parse('{"foo": 1, "bar": null}').status).toBe(true);
  });
});