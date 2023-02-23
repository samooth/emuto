"use strict";

var _lambda = _interopRequireDefault(require("../lambda"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('lambda generator', function () {
  it('returns correct code', function () {
    expect((0, _lambda["default"])({
      name: 'lambda',
      value: {
        variable: 'input',
        definition: {
          name: 'primitive',
          value: '4'
        }
      }
    })).toEqual('(function(input) {return 4})');
  });
  it('returns correct code', function () {
    expect((0, _lambda["default"])({
      name: 'lambda',
      value: {
        variable: 'input',
        definition: {
          name: 'primitive',
          value: '8'
        }
      }
    })).toEqual('(function(input) {return 8})');
  });
  it('returns correct code', function () {
    expect((0, _lambda["default"])({
      name: 'lambda',
      value: {
        variable: 'foobar3',
        definition: {
          name: 'primitive',
          value: '8'
        }
      }
    })).toEqual('(function(foobar3) {_ = _.__assign__(\'foobar3\', foobar3, _); return 8})');
  });
});