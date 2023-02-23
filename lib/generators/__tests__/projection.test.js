"use strict";

var _projection = _interopRequireDefault(require("../projection"));
var _objectProjection = _interopRequireDefault(require("../objectProjection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var example = function example(optional) {
  return {
    name: 'projection',
    value: {
      optional: optional,
      left: {
        name: 'inputProp',
        value: '.foo'
      },
      right: {
        name: 'list',
        value: [{
          name: 'simpleList',
          value: []
        }]
      }
    }
  };
};
describe('projection generator', function () {
  it('.foo.bar', function () {
    var fakeGenerator = function fakeGenerator(_ref // eslint-disable-line flowtype/require-parameter-type
    ) {
      var name = _ref.name;
      return name === 'inputProp' ? 'input.foo' : '[4]';
    };
    expect((0, _projection["default"])(fakeGenerator)(example(false))).toEqual('_.projection(input.foo, [4], false)');
  });
  it('.foo?.bar', function () {
    var fakeGenerator = function fakeGenerator(_ref2 // eslint-disable-line flowtype/require-parameter-type
    ) {
      var name = _ref2.name;
      return name === 'inputProp' ? 'input.foo' : '[4]';
    };
    expect((0, _projection["default"])(fakeGenerator)(example(true))).toEqual('_.projection(input.foo, [4], true)');
  });
  it('object projection', function () {
    var tree = {
      name: 'objectProjection',
      value: {
        optional: false,
        left: {
          name: 'list',
          value: [{
            name: 'simpleList',
            value: [{
              name: 'primitive',
              value: '3'
            }, {
              name: 'primitive',
              value: '2'
            }]
          }]
        },
        right: ['foo', 'bar', 'baz'].map(function (item) {
          return {
            type: 'SimpleItem',
            value: item
          };
        })
      }
    };
    var fakeGenerator = function fakeGenerator() {
      return 'input.foo';
    };
    expect((0, _objectProjection["default"])(fakeGenerator)(tree)).toEqual('_.__objectProjection__(input.foo, [{"type":"SimpleItem","value":"foo"},{"type":"SimpleItem","value":"bar"},{"type":"SimpleItem","value":"baz"}], false, _)');
  });
  it('object projection - nested', function () {
    var tree = {
      name: 'objectProjection',
      value: {
        optional: false,
        left: {
          name: 'variable',
          value: '$'
        },
        right: [{
          type: 'RecursiveItem',
          name: 'foo',
          value: {
            name: 'objectProjection',
            value: [{
              type: 'SimpleItem',
              value: 'bar',
              alias: 'baz'
            }, {
              type: 'RecursiveItem',
              name: 'baz',
              value: {
                name: 'objectProjection',
                value: [{
                  type: 'SimpleItem',
                  value: 'x'
                }]
              }
            }]
          }
        }]
      }
    };
    var fakeGenerator = function fakeGenerator() {
      return 'input.foo';
    };
    expect((0, _objectProjection["default"])(fakeGenerator)(tree)).toEqual('_.__objectProjection__(input.foo, [{"type":"RecursiveItem","name":"foo","value":{"name":"objectProjection","value":[{"type":"SimpleItem","value":"bar","alias":"baz"},{"type":"RecursiveItem","name":"baz","value":{"name":"objectProjection","value":[{"type":"SimpleItem","value":"x"}]}}]}}], false, _)');
  });
});