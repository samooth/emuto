"use strict";

var _collectionCore = _interopRequireDefault(require("../collectionCore"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var segment = {
  name: 'simpleList',
  value: [{
    name: 'variable',
    value: '$'
  }, {
    name: 'variable',
    value: '$'
  }]
};
describe('collectionCore parser', function () {
  it('parses null  , false', function () {
    expect(_collectionCore["default"].parse('null  , false').status).toBe(true);
  });
  it('parses spread operatoor', function () {
    expect(_collectionCore["default"].parse('null  , ...$').status).toBe(true);
    expect(_collectionCore["default"].parse('...$').status).toBe(true);
    expect(_collectionCore["default"].parse('...$, ...[1, 2, 3]').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_collectionCore["default"].parse('$,$,...$,$').value).toMatchObject({
      name: 'collectionCore',
      value: [segment, {
        name: 'spread',
        value: {
          name: 'variable',
          value: '$'
        }
      }, {
        name: 'simpleList',
        value: [{
          name: 'variable',
          value: '$'
        }]
      }]
    });
  });
  it('parses each .about.name in .user (comprehension)', function () {
    expect(_collectionCore["default"].parse('each .about.name in .user').status).toBe(true);
  });
  it('parses each .about.name in .user if .user.age >= 3 (comprehension)', function () {
    expect(_collectionCore["default"].parse('each .about.name in .user if .user.age >= 3').status).toBe(true);
  });
  it('parses each $[0] in $ sortBy $ => $.size (comprehension)', function () {
    expect(_collectionCore["default"].parse('each $[0] in $ sortBy $ => $.size').status).toBe(true);
  });
  it('returns correct value', function () {
    expect(_collectionCore["default"].parse('each 9 in 1 11').value).toMatchObject({
      name: 'collectionCore',
      value: [{
        name: 'spread',
        value: {
          name: 'parentheses',
          value: {
            name: 'pipe',
            value: {
              left: {
                name: 'pipe',
                value: {
                  left: {
                    name: 'primitive',
                    value: '1'
                  },
                  right: {
                    name: 'primitive',
                    value: '11'
                  }
                }
              },
              right: {
                name: 'functionCall',
                value: {
                  left: {
                    name: 'identifier',
                    value: 'map'
                  },
                  right: {
                    name: 'lambda',
                    value: {
                      variable: 'input',
                      definition: {
                        name: 'primitive',
                        value: '9'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }]
    });
  });
  it('returns correct value', function () {
    expect(_collectionCore["default"].parse('each 3 in 8').value).toMatchObject({
      name: 'collectionCore',
      value: [{
        name: 'spread',
        value: {
          name: 'parentheses',
          value: {
            name: 'pipe',
            value: {
              left: {
                name: 'primitive',
                value: '8'
              },
              right: {
                name: 'functionCall',
                value: {
                  left: {
                    name: 'identifier',
                    value: 'map'
                  },
                  right: {
                    name: 'lambda',
                    value: {
                      variable: 'input',
                      definition: {
                        name: 'primitive',
                        value: '3'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }]
    });
  });
  it('returns correct value', function () {
    expect(_collectionCore["default"].parse('$,$').value).toMatchObject({
      name: 'collectionCore',
      value: [segment]
    });
  });
  it('returns correct value', function () {
    expect(_collectionCore["default"].parse('$,$, null').value).toMatchObject({
      name: 'collectionCore',
      value: [{
        name: 'simpleList',
        value: [{
          name: 'variable',
          value: '$'
        }, {
          name: 'variable',
          value: '$'
        }, {
          name: 'primitive',
          value: 'null'
        }]
      }]
    });
  });
  it('returns correct value', function () {
    expect(_collectionCore["default"].parse('true, [false, false]').value).toMatchObject({
      name: 'collectionCore',
      value: [{
        name: 'simpleList',
        value: [{
          name: 'primitive',
          value: 'true'
        }, {
          name: 'list',
          value: [{
            name: 'simpleList',
            value: [{
              name: 'primitive',
              value: 'false'
            }, {
              name: 'primitive',
              value: 'false'
            }]
          }]
        }]
      }]
    });
  });
});