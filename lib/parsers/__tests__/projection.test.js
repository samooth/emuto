"use strict";

var _projection = _interopRequireDefault(require("../projection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('projection parser', function () {
  it('does not parse incorrect nesting', function () {
    expect(_projection["default"].parse('{}{foo{bar}{baz}}').status).toBe(false);
  });
  it('parses [5, 6, 7][5]', function () {
    expect(_projection["default"].parse('[5, 6, 7][5]').status).toBe(true);
  });
  it('parses null', function () {
    expect(_projection["default"].parse('null').status).toBe(true);
  });
  it('parses {"foo": "bar"}["foo"]', function () {
    expect(_projection["default"].parse('{"foo": "bar"}["foo"]').status).toBe(true);
  });
  it('parses {"foo": "bar"}{"foo"}', function () {
    expect(_projection["default"].parse('{"foo": "bar"}{"foo"}').status).toBe(true);
  });
  it('parses {"foo": "bar"}{"foo", bar}', function () {
    expect(_projection["default"].parse('{"foo": "bar"}{"foo", bar}').status).toBe(true);
  });
  it('parses {"foo": "bar"}{baz, foo,bar}', function () {
    expect(_projection["default"].parse('{"foo": "bar"}{baz, foo,bar}').status).toBe(true);
  });
  it('parses {"foo": "bar"}{baz, ...foo,bar}', function () {
    expect(_projection["default"].parse('{"foo": "bar"}{baz, ...foo,bar}').status).toBe(true);
  });
  it('parses {"foo": "bar"}{baz, ... Bar,bar}', function () {
    expect(_projection["default"].parse('{"foo": "bar"}{baz, ... Bar,bar}').status).toBe(true);
  });
  it('parses {"foo": "bar"}{baz, foo{one, two}, bar}', function () {
    expect(_projection["default"].parse('{"foo": "bar"}{baz, foo{one, two}, bar}').status).toBe(true);
  });
  it('parses {"foo": "bar"}{baz, foo{one, two}, bar}', function () {
    expect(_projection["default"].parse('{"foo": "bar"}{fooBar: foo_bar, baz}').status).toBe(true);
  });
  it('parses {"foo": "bar"}{baz, foo,bar} (multiline)', function () {
    expect(_projection["default"].parse("{\"foo\": \"bar\"}{\n          baz\n          foo\n          bar\n      }").status).toBe(true);
  });
  it('parses multiline nested example', function () {
    expect(_projection["default"].parse("${\n        foo {\n            bar {}\n            baz {\n                one { two, three { four} }\n                baz\n            }\n        }\n      }").status).toBe(true);
  });
  it('parses {"foo": "bar"}["foo"]', function () {
    expect(_projection["default"].parse('{"foo": "bar"}["foo", -3]').status).toBe(true);
  });
  it('parses [5, 6, 7]  [5]', function () {
    expect(_projection["default"].parse('[5, 6, 7]  [5:2, 4]').status).toBe(true);
  });
  it('parses [5, 6, 7]?[5]', function () {
    expect(_projection["default"].parse('[5, 6, 7]?[5]').status).toBe(true);
  });
  it('parses [5, 6, 7]?.foo?.bar', function () {
    expect(_projection["default"].parse('[5, 6, 7]?.foo?.bar').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_projection["default"].parse('false').value).toMatchObject({
      name: 'primitive',
      value: 'false'
    });
  });
  it('returns correct value', function () {
    expect(_projection["default"].parse('$?.foo').value).toMatchObject({
      value: {
        optional: true,
        right: '.foo'
      }
    });
  });
  it('returns correct value', function () {
    expect(_projection["default"].parse('$?[]').value).toMatchObject({
      value: {
        optional: true
      }
    });
  });
  it('returns correct value - object projection with aliases', function () {
    expect(_projection["default"].parse('[3, 2]{ foo: bar, bar: foo { baz } }').value).toMatchObject({
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
        right: [{
          type: 'SimpleItem',
          value: 'bar',
          alias: 'foo'
        }, {
          name: 'foo',
          type: 'RecursiveItem',
          alias: 'bar',
          value: {
            name: 'objectProjection',
            value: [{
              type: 'SimpleItem',
              value: 'baz'
            }]
          }
        }]
      }
    });
  });
  it('returns correct value - object projection', function () {
    expect(_projection["default"].parse("[3, 2]{foo,\"bar\"\n          baz\n          }").value).toMatchObject({
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
        right: [{
          type: 'SimpleItem',
          value: 'foo'
        }, {
          type: 'SimpleItem',
          value: 'bar'
        }, {
          type: 'SimpleItem',
          value: 'baz'
        }]
      }
    });
  });
  it('returns correct value - recursive object projection', function () {
    expect(_projection["default"].parse('{}{ foo { ...bar, baz {x} }}').value).toMatchObject({
      name: 'objectProjection',
      value: {
        left: {
          end: {
            column: 3,
            line: 1,
            offset: 2
          },
          name: 'object',
          start: {
            column: 1,
            line: 1,
            offset: 0
          },
          value: [{
            end: {
              column: 2,
              line: 1,
              offset: 1
            },
            name: 'simpleList',
            start: {
              column: 2,
              line: 1,
              offset: 1
            },
            value: []
          }]
        },
        optional: false,
        right: [{
          name: 'foo',
          type: 'RecursiveItem',
          value: {
            name: 'objectProjection',
            value: [{
              type: 'FragmentItem',
              value: 'bar'
            }, {
              name: 'baz',
              type: 'RecursiveItem',
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
    });
  });
  it('returns correct value', function () {
    expect(_projection["default"].parse('[3, 2][3]').value).toMatchObject({
      name: 'projection',
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
        right: {
          name: 'list',
          value: [{
            name: 'simpleList',
            value: [{
              name: 'primitive',
              value: '3'
            }]
          }]
        }
      }
    });
  });
});