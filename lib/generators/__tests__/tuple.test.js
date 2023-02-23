"use strict";

var _tuple = _interopRequireDefault(require("../tuple"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var tree = {
  name: 'tuple',
  value: [{
    name: 'primitive',
    value: 'true'
  }, {
    name: 'primitive',
    value: 'false'
  }]
};
describe('tuple generator', function () {
  it('true: false', function () {
    expect((0, _tuple["default"])(tree)).toEqual('[true,false]');
  });
});