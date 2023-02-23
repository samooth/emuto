"use strict";

var _generator = _interopRequireDefault(require("../generator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('generator', function () {
  it('throws error on unknown node types', function () {
    expect(function () {
      (0, _generator["default"])({
        name: 'bullshit'
      });
    }).toThrow("Unknown node name 'bullshit'");
  });
});