"use strict";

var _functionCall = _interopRequireDefault(require("../functionCall"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var fakeGenerator = function fakeGenerator(_ref // eslint-disable-line flowtype/require-parameter-type
) {
  var name = _ref.name;
  return '[]';
};
describe('functionCall generator', function () {
  it('generates correct code', function () {
    expect((0, _functionCall["default"])(fakeGenerator)({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'foo'
        },
        right: {
          name: 'list',
          value: [{
            name: 'simpleList',
            value: []
          }]
        }
      }
    })).toEqual('_.foo([])(input)');
  });
  it('generates correct code - no args', function () {
    expect((0, _functionCall["default"])(fakeGenerator)({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'foo'
        },
        right: null
      }
    })).toEqual('_.foo(input)');
  });
});