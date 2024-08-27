"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Primary = exports.Accent = void 0;
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var meta = {
  title: "components/atoms/Button",
  component: _index["default"],
  argTypes: {
    onPress: {
      action: "pressed"
    },
    variant: {
      control: "select",
      options: ["primary", "accent"]
    }
  },
  args: {
    variant: "accent"
  }
};
var _default = exports["default"] = meta;
var Primary = exports.Primary = {
  args: {
    title: "Primary Button",
    variant: "primary"
  }
};
var Accent = exports.Accent = {
  args: {
    title: "Accent Button",
    variant: "accent"
  }
};