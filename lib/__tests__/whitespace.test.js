"use strict";

var _parser = _interopRequireDefault(require("../parsers/parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var examples = [' 0', '0 ', "[\n0\n]", "// This is a comment\n    42", "42\n    // This is a comment\n    ", "\n    filter\n    // foo bar / asd\n    $ => \"Hello\"\n    ", "\n    filter\n    // foo bar / asd\n    $ =>\n    // foo bar / asd\n    \"Hello\"\n    ", "\n    filter // sadsadasd\n    // foo bar / asd\n    $ // sasadasdasd\n    // asdasd \n    => // asdsada sdsad\n    // foo bar / asd\n    \"Hello\"\n    ", "\n    3 // foo\n    + 4\n    ", "\n    3 + //foo\n    //goo \n    4 // foo\n    ", "\n    3 +\n    //goo \n    4\n    *\n    \"hello\" // 324234\n    - // asdsad\n    4\n    ", "\n    // foo\n    join //ffoo\n    // foo\n    \"Hello\" // foo\n    //foo\n    ", "\n    // foo\n    -\n    // foo\n    4\n    ", "\n    [4, 3] //foo\n    // foo\n    [3, 2] // 3423\n    .foo // foo\n    // #\n    ", "\n    [\n    // foo\n    5\n    , // foo\n    43 //foo\n    ,\n    \"Hello\" // foo\n    , // foo\n    34234 , //\n    \"Hello\" //\n    ] //\n    ", "\n    // foo\n    ($foo + $bar // foo\n     where //foo\n       $foo = 3 //foo\n    )\n    where\n      $bar // foo\n        = // foo\n         4\n    "];
var extendedExamples = [].concat(examples, _toConsumableArray(examples.map(function (example) {
  return example.replace('//', '#');
})));
describe('whitespace tests', function () {
  extendedExamples.forEach(function (example) {
    it("parses '".concat(example.slice(0, 25), "'"), function () {
      (0, _parser["default"])(example);
    });
  });
});