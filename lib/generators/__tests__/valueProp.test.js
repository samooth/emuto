"use strict";

var _valueProp = _interopRequireDefault(require("../valueProp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var example = function example(optional) {
  return {
    name: 'valueProp',
    value: {
      optional: optional,
      left: {
        name: 'inputProp',
        value: '.foo'
      },
      right: '.bar'
    }
  };
};
describe('valueProp generator', function () {
  it('.foo.bar', function () {
    var fakeGenerator = function fakeGenerator() {
      return 'input.foo';
    };
    expect((0, _valueProp["default"])(fakeGenerator)(example(false))).toEqual('input.foo.bar');
  });
  it('.foo?.bar', function () {
    var fakeGenerator = function fakeGenerator() {
      return 'input.foo';
    };
    expect((0, _valueProp["default"])(fakeGenerator)(example(true))).toEqual('_.__opt__(input.foo, function(x) {return x.bar})');
  });
});