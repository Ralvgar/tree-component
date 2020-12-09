"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggleable = exports.NotToggleable = exports.List = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: fit-content;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    list-style: none;  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = _styledComponents.default.ul(_templateObject());

exports.List = List;

var NotToggleable = _styledComponents.default.li(_templateObject2());

exports.NotToggleable = NotToggleable;
var Toggleable = (0, _styledComponents.default)(NotToggleable)(_templateObject3());
exports.Toggleable = Toggleable;