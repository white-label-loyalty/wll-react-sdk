"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/organisms/PointsTile",
  component: _index["default"]
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], args);
};
var Default = exports.Default = Template.bind({});
Default.args = {
  configuration: {
    title: "Points",
    imageUrl: "https://picsum.photos/200/200",
    multiplier: 1,
    points: 100,
    suffix: "pts"
  }
};