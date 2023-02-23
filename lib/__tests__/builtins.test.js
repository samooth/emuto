"use strict";

var _builtins = _interopRequireDefault(require("../builtins"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var projection = _builtins["default"].projection,
  join = _builtins["default"].join,
  map = _builtins["default"].map,
  sortBy = _builtins["default"].sortBy,
  filter = _builtins["default"].filter,
  parseJSON = _builtins["default"].parseJSON,
  get = _builtins["default"].get,
  __assign__ = _builtins["default"].__assign__,
  reverse = _builtins["default"].reverse,
  reduce = _builtins["default"].reduce,
  length = _builtins["default"].length,
  size = _builtins["default"].size,
  keys = _builtins["default"].keys,
  split = _builtins["default"].split,
  values = _builtins["default"].values,
  entries = _builtins["default"].entries,
  combinations = _builtins["default"].combinations,
  product = _builtins["default"].product,
  __opt__ = _builtins["default"].__opt__,
  __spread__ = _builtins["default"].__spread__,
  has = _builtins["default"].has,
  error = _builtins["default"].error,
  __objectProjection__ = _builtins["default"].__objectProjection__;
describe('built ins', function () {
  describe('__objectProjection__', function () {
    // eslint-disable-next-line
    var _ = function _(texts) {
      return texts.map(function (text) {
        return {
          type: 'SimpleItem',
          value: text
        };
      });
    };
    it('empty object empty projection', function () {
      expect(__objectProjection__({}, [], false)).toEqual({});
    });
    it('empty object non-empty projection', function () {
      expect(__objectProjection__({}, _(['foo']), false)).toEqual({
        foo: null
      });
    });
    it('non-empty object non-empty projection', function () {
      expect(__objectProjection__({
        foo: 3
      }, _(['foo']), false)).toEqual({
        foo: 3
      });
    });
    it('fragments', function () {
      expect(__objectProjection__({
        foo: 3
      }, [{
        type: 'FragmentItem',
        value: 'F'
      }], false, {
        F: function F(x) {
          return {
            foo: 3
          };
        }
      } // eslint-disable-line
      )).toEqual({
        foo: 3
      });
    });
    it('more complex example', function () {
      expect(__objectProjection__({
        foo: 'f',
        bar: '2'
      }, _(['foo', 'bar', 'baz']), false)).toEqual({
        foo: 'f',
        bar: '2',
        baz: null
      });
    });
    it('nesting nonexistent data', function () {
      expect(__objectProjection__({}, [{
        type: 'RecursiveItem',
        name: 'foo',
        value: {
          name: 'objectProjection',
          value: []
        }
      }], false)).toEqual({
        foo: null
      });
    });
    it('aliases', function () {
      expect(__objectProjection__({
        h: 'e',
        iii: '4',
        foo: {
          bar: 4,
          baz: {
            x: 'foo',
            y: -3
          }
        }
      }, [{
        type: 'SimpleItem',
        value: 'iii',
        alias: 'thing'
      }, {
        type: 'RecursiveItem',
        name: 'foo',
        value: {
          name: 'objectProjection',
          value: [{
            type: 'SimpleItem',
            value: 'bar',
            alias: 'Bar'
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
      }], false)).toEqual({
        thing: '4',
        foo: {
          Bar: 4,
          baz: {
            x: 'foo'
          }
        }
      });
    });
    it('nesting example', function () {
      expect(__objectProjection__({
        h: 'e',
        iii: '4',
        foo: {
          bar: 4,
          baz: {
            x: 'foo',
            y: -3
          }
        }
      }, [{
        type: 'SimpleItem',
        value: 'iii'
      }, {
        type: 'RecursiveItem',
        name: 'foo',
        value: {
          name: 'objectProjection',
          value: [{
            type: 'SimpleItem',
            value: 'bar'
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
      }], false)).toEqual({
        iii: '4',
        foo: {
          bar: 4,
          baz: {
            x: 'foo'
          }
        }
      });
    });
  });
  describe('projection', function () {
    it('handles non-negative numbers', function () {
      expect(projection([1, 2], [1], false)).toEqual(2);
    });
    it('handles string', function () {
      expect(projection({
        foo: 'bar'
      }, ['foo'], false)).toEqual('bar');
    });
    it('handles list of strings', function () {
      expect(projection({
        foo: 'bar'
      }, ['foo', 'baz'], false)).toEqual(['bar', null]);
    });
    it('handles negative numbers', function () {
      expect(projection([1, 2, 3], [-1], false)).toEqual(3);
      expect(projection([1, 2, 3], [-2], false)).toEqual(2);
      expect(projection([1, 2, 3], [-3], false)).toEqual(1);
    });
    it('handles list of numbers', function () {
      expect(projection([1, 2, 3], [-1, 0], false)).toEqual([3, 1]);
    });
    it('handles sliceing of numbers', function () {
      expect(projection([1, 2, 3, 4], [[1, 3]], false)).toEqual([2, 3]);
    });
    it('handles empty projection', function () {
      expect(projection([1, 2, 3], [], false)).toEqual([]);
    });
    it('handles falsy list items', function () {
      expect(projection([0], [0], false)).toEqual(0);
      expect(projection([false], [0], false)).toEqual(false);
    });
    it('handles optional projection', function () {
      expect(projection(undefined, [], true)).toEqual(null);
      expect(projection(null, [], true)).toEqual(null);
      expect(projection([], [], true)).toEqual([]);
    });
  });
  describe('__opt__', function () {
    var f = function f(x) {
      return 'Hello';
    }; // eslint-disable-line
    expect(__opt__(undefined, f)).toEqual(null);
    expect(__opt__(null, f)).toEqual(null);
    expect(__opt__([], f)).toEqual('Hello');
  });
  describe('__spread__', function () {
    var f = function f(x) {
      return 'Hello';
    }; // eslint-disable-line
    expect(__spread__([1, 2])).toEqual([1, 2]);
    expect(__spread__({
      a: 'b',
      c: 3
    })).toEqual([['a', 'b'], ['c', 3]]);
    expect(__spread__('ab')).toEqual(['a', 'b']);
  });
  describe('parseJSON', function () {
    it('returns correct value', function () {
      expect(parseJSON('{}')).toEqual({});
      expect(parseJSON('[0]')).toEqual([0]);
    });
  });
  describe('join', function () {
    it('returns correct value', function () {
      expect(join(' ')(['Hello', 'World'])).toEqual('Hello World');
      expect(join(',')(['foo', 'World', ' '])).toEqual('foo,World, ');
    });
  });
  describe('split', function () {
    it('returns correct value', function () {
      expect(split(' ')('Hello World')).toEqual(['Hello', 'World']);
      expect(split(',')('Hello World')).toEqual(['Hello World']);
    });
  });
  describe('map', function () {
    it('returns correct value', function () {
      var id = function id(a) {
        return a;
      }; // eslint-disable-line
      var foo = function foo(a) {
        return 'foo';
      }; // eslint-disable-line
      expect(map(id)(['Hello', 'World'])).toEqual(['Hello', 'World']);
      expect(map(foo)(['Hello', 'World'])).toEqual(['foo', 'foo']);
    });
    it('suppors mapping objects', function () {
      // eslint-disable-next-line
      var f = function f($key) {
        return function ($value) {
          return [$key[0], $value * -1];
        };
      };
      var unmapped = {
        foo: 3,
        bar: 0
      };
      expect(map(f)(unmapped)).toEqual({
        f: -3,
        b: -0
      });
    });
  });
  describe('reduce', function () {
    it('returns correct value', function () {
      var x = function x(a) {
        return function (b) {
          return a * b + 1;
        };
      }; // eslint-disable-line
      expect(reduce([x, 4])([1, 2])).toEqual(11);
    });
  });
  describe('length', function () {
    it('returns correct value', function () {
      expect(length([1, 2])).toEqual(2);
      expect(length([1, 2, 4])).toEqual(3);
      expect(length({})).toEqual(0);
      expect(length({
        foo: 'bar'
      })).toEqual(1);
    });
  });
  describe('size', function () {
    it('returns correct value', function () {
      expect(size([1, 2])).toEqual(2);
      expect(size({
        foo: 'bar'
      })).toEqual(1);
      expect(size({
        foo: 'bar',
        x: 3
      })).toEqual(2);
      expect(size({})).toEqual(0);
      expect(size([1, 2, 4])).toEqual(3);
    });
  });
  describe('keys', function () {
    it('returns correct value', function () {
      expect(keys({})).toEqual([]);
      expect(new Set(keys({
        foo: 'bar',
        baz: 4
      }))).toEqual(new Set(['foo', 'baz']));
    });
  });
  describe('values', function () {
    it('returns correct value', function () {
      expect(values({})).toEqual([]);
      expect(new Set(values({
        foo: 'bar',
        baz: 4
      }))).toEqual(new Set(['bar', 4]));
    });
  });
  describe('entries', function () {
    it('returns correct value', function () {
      expect(entries({})).toEqual([]);
      expect(new Set(entries({
        foo: 'bar',
        baz: 4
      }))).toEqual(new Set([['foo', 'bar'], ['baz', 4]]));
    });
  });
  describe('sortBy', function () {
    it('returns correct value', function () {
      var id = function id(a) {
        return a;
      }; // eslint-disable-line
      var foo = function foo(a) {
        return a.foo;
      }; // eslint-disable-line
      expect(sortBy(id)(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
      expect(sortBy(foo)([{
        foo: 3
      }, {
        foo: -2
      }, {
        foo: 0
      }])).toEqual([{
        foo: -2
      }, {
        foo: 0
      }, {
        foo: 3
      }]);
    });
    describe('has', function () {
      it('returns correct value', function () {
        expect(has(0)(['c', 'a', 'b'])).toEqual(true);
        expect(has(10)(['c', 'a', 'b'])).toEqual(false);
        expect(has('foo')({
          foo: false
        })).toEqual(true);
        expect(has('bar')({
          foo: false
        })).toEqual(false);
      });
    });
    it('does not mutate original array', function () {
      var id = function id(a) {
        return a;
      }; // eslint-disable-line
      var input = ['c', 'a', 'b'];
      var originalValue = input.slice();
      sortBy(id)(input);
      expect(input).toEqual(originalValue);
    });
  });
  describe('reverse', function () {
    it('returns correct value', function () {
      expect(reverse(['c', 'a', 'b'])).toEqual(['b', 'a', 'c']);
    });
    it('does not mutate original array', function () {
      var input = ['c', 'a', 'b'];
      var originalValue = input.slice();
      reverse(input);
      expect(input).toEqual(originalValue);
    });
  });
  describe('filter', function () {
    it('returns correct value', function () {
      var foo = function foo(a) {
        return a.foo >= 0;
      }; // eslint-disable-line
      expect(filter(foo)([{
        foo: 3
      }, {
        foo: -2
      }, {
        foo: 0
      }])).toEqual([{
        foo: 3
      }, {
        foo: 0
      }]);
    });
    it('does not mutate original array', function () {
      var f = function f(a) {
        return a == 'a';
      }; // eslint-disable-line
      var input = ['c', 'a', 'b'];
      var originalValue = input.slice();
      filter(f)(input);
      expect(input).toEqual(originalValue);
    });
  });
  describe('assignment', function () {
    it('get fails without assignment', function () {
      expect(function () {
        get('foobar');
      }).toThrow();
    });
    it('assign works', function () {
      var context = {
        get: get,
        __assign__: __assign__
      };
      var _ = __assign__('foobar', 3.14, context);
      expect(_.get('foobar')).toEqual(3.14);
      _ = _.__assign__('baz', 'Hello', _);
      expect(_.get('baz')).toEqual('Hello');
    });
  });
  describe('combinations', function () {
    it('returns correct value', function () {
      expect(combinations(2)('ABCD')).toEqual([['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'], ['B', 'D'], ['C', 'D']]);
      expect(combinations(3)([0, 1, 2, 3])).toEqual([[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]]);
    });
  });
  describe('product', function () {
    it('returns correct value', function () {
      expect(product([['a', 'b'], []])).toEqual([]);
      expect(product([['a', 'b'], ['1', '2']])).toEqual([['a', '1'], ['b', '1'], ['a', '2'], ['b', '2']]);
    });
  });
  describe('error', function () {
    it('works correctly 1', function () {
      expect(function () {
        error('Hello World')();
      }).toThrow('Hello World');
    });
    it('works correctly 2', function () {
      expect(function () {
        error('foo')();
      }).toThrow('foo');
    });
  });
});