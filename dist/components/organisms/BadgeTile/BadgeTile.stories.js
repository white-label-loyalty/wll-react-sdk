"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/organisms/BadgeTile",
  component: _index["default"]
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], args);
};
var Default = exports.Default = Template.bind({});
Default.args = {
  configuration: {
    badgeId: "a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d",
    badge: {
      id: "a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d",
      name: "Top Shopper",
      description: "You’ve earned the Top Shopper badge 2 times! Last awarded on 1 Jan 2024.",
      artworkUrl: "https://picsum.photos/200/300",
      createdAt: "2024-08-15T13:06:14.583Z",
      updatedAt: "2024-08-15T13:06:14.583Z"
    }
  }
};