"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Title = exports.Subtitle = exports.Label = exports.Eyebrow = exports.Caption = exports.Body = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "components/atoms/Text",
  component: _.Text,
  argTypes: {
    variant: {
      control: "select",
      options: ["eyebrow", "title", "subtitle", "body", "caption", "label"]
    },
    children: {
      control: "text"
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(Story, null);
  }]
};
var _default = exports["default"] = meta;
var Body = exports.Body = {
  args: {
    children: "Hello, World!",
    variant: "body"
  }
};
var Eyebrow = exports.Eyebrow = {
  args: {
    children: "Tier",
    variant: "eyebrow"
  }
};
var Title = exports.Title = {
  args: {
    children: "Welcome, Nick!",
    variant: "title"
  }
};
var Subtitle = exports.Subtitle = {
  args: {
    children: "This is a subtitle",
    variant: "subtitle"
  }
};
var Caption = exports.Caption = {
  args: {
    children: "4536/6000",
    variant: "caption"
  }
};
var Label = exports.Label = {
  args: {
    children: "You reached Gold!",
    variant: "label"
  }
};