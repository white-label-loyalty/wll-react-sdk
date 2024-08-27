"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Small = exports.Full = exports.Empty = exports.Default = exports.Accent = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/atoms/ProgressBar",
  component: _["default"],
  argTypes: {
    percentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      }
    },
    variant: {
      control: "select",
      options: ["primary", "accent"]
    },
    height: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  }
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_["default"], args);
};
var Default = exports.Default = Template.bind({});
Default.args = {
  percentage: 50,
  variant: "primary",
  height: "md"
};
var Accent = exports.Accent = Template.bind({});
Accent.args = {
  percentage: 75,
  variant: "accent",
  height: "sm"
};
var Small = exports.Small = Template.bind({});
Small.args = {
  percentage: 25,
  variant: "primary",
  height: "sm"
};
var Full = exports.Full = Template.bind({});
Full.args = {
  percentage: 100,
  variant: "primary",
  height: "sm"
};
var Empty = exports.Empty = Template.bind({});
Empty.args = {
  percentage: 0,
  variant: "primary",
  height: "sm"
};