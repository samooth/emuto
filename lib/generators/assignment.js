"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(Generator) {
  return function (_ref) {
    var value = _ref.value;
    var compileOneAssignment = function compileOneAssignment(assignment) {
      return "_ = _.__assign__('".concat(assignment[0].value, "', (").concat(Generator(assignment[1]), "), _)");
    };
    var compileAssignments = function compileAssignments(assignments) {
      return assignments.map(compileOneAssignment).join('; ');
    };
    return "((function() {".concat(compileAssignments(value.assignments), "; return (").concat(Generator(value.program), ")})())");
  };
};
exports["default"] = _default;