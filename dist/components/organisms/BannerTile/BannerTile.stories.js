"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require("."));
var _tile = require("../../../types/tile");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/organisms/BannerTile",
  component: _["default"]
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_["default"], args);
};
var Default = exports.Default = Template.bind({});
Default.args = {
  configuration: {
    imageUrl: "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg",
    title: "Summer Sale",
    description: "Get up to 50% off on selected items!",
    ctaText: "SHOP NOW",
    ctaLink: "https://www.example.com",
    ctaAction: _tile.CtaAction.sameWindow
  }
};