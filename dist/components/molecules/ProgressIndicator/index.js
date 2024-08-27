"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
var _atoms = require("../../atoms");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProgressIndicator = exports.ProgressIndicator = function ProgressIndicator(_ref) {
  var currentPoints = _ref.currentPoints,
    maxPoints = _ref.maxPoints,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "sm" : _ref$height,
    _ref$attained = _ref.attained,
    attained = _ref$attained === void 0 ? false : _ref$attained;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var percentage = attained ? 100 : currentPoints / maxPoints * 100;
  var isComplete = percentage >= 100 || attained;
  var progressVariant = variant;
  if (isComplete) {
    progressVariant = "primary";
  } else if (percentage < 50) {
    progressVariant = "accent";
  }
  return /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_atoms.ProgressBar, {
    percentage: percentage,
    variant: progressVariant,
    height: height
  }), /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: [styles.circleContainer]
  }, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: [styles.circle, {
      borderColor: theme.derivedSurface[20],
      backgroundColor: isComplete ? theme.primary : theme.surface,
      borderWidth: isComplete ? 0 : 4
    }]
  }, isComplete && /*#__PURE__*/_react["default"].createElement(_atoms.Icon, {
    name: "Check",
    size: 12,
    color: theme.primaryText
  }))));
};
var styles = _StyleSheet["default"].create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  circleContainer: {
    position: "absolute",
    right: 0
  },
  circle: {
    width: 21,
    height: 21,
    borderRadius: 9999,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
var _default = exports["default"] = ProgressIndicator;