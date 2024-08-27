"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SmallHeight = exports.LargeHeight = exports.Incomplete = exports.Default = exports.Complete = exports.AlmostComplete = exports.AccentVariant = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/molecules/ProgressIndicator",
  component: _["default"],
  argTypes: {
    currentPoints: {
      control: {
        type: "number",
        min: 0,
        max: 100
      }
    },
    maxPoints: {
      control: {
        type: "number",
        min: 1,
        max: 100
      }
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "accent"]
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
  currentPoints: 50,
  maxPoints: 100,
  variant: "primary",
  height: "md"
};
var Incomplete = exports.Incomplete = Template.bind({});
Incomplete.args = {
  currentPoints: 30,
  maxPoints: 100,
  variant: "primary",
  height: "md"
};
var AlmostComplete = exports.AlmostComplete = Template.bind({});
AlmostComplete.args = {
  currentPoints: 90,
  maxPoints: 100,
  variant: "primary",
  height: "md"
};
var Complete = exports.Complete = Template.bind({});
Complete.args = {
  currentPoints: 100,
  maxPoints: 100,
  variant: "primary",
  height: "md"
};
var AccentVariant = exports.AccentVariant = Template.bind({});
AccentVariant.args = {
  currentPoints: 40,
  maxPoints: 100,
  variant: "accent",
  height: "md"
};
var SmallHeight = exports.SmallHeight = Template.bind({});
SmallHeight.args = {
  currentPoints: 70,
  maxPoints: 100,
  variant: "primary",
  height: "sm"
};
var LargeHeight = exports.LargeHeight = Template.bind({});
LargeHeight.args = {
  currentPoints: 80,
  maxPoints: 100,
  variant: "primary",
  height: "lg"
};