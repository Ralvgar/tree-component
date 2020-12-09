"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Folder = require("./Folder");

var _TreeComponentStyle = require("./TreeComponentStyle");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeComponent = function TreeComponent(_ref) {
  var file = _ref.file,
      iconStyle = _ref.iconStyle;
  return /*#__PURE__*/_react.default.createElement(_TreeComponentStyle.List, null, file.map(function (value) {
    return !!value.childrens ? /*#__PURE__*/_react.default.createElement(_Folder.Folder, {
      name: value.name,
      iconStyle: iconStyle
    }, /*#__PURE__*/_react.default.createElement(TreeComponent, {
      file: value.childrens,
      iconStyle: iconStyle
    })) : /*#__PURE__*/_react.default.createElement(_TreeComponentStyle.NotToggleable, {
      key: value.name
    }, value.name);
  }));
};

TreeComponent.propTypes = {
  file: _propTypes.default.array.isRequired
};
var _default = TreeComponent;
exports.default = _default;