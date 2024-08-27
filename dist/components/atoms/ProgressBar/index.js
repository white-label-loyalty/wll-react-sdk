"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
var _variant = require("../../../utils/variant");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var useStyles = function useStyles(theme) {
  return _StyleSheet["default"].create({
    container: {
      width: "100%",
      borderRadius: theme.sizes.borderRadiusRounded,
      overflow: "hidden"
    },
    progress: {
      borderRadius: theme.sizes.borderRadiusRounded,
      height: "100%"
    }
  });
};
var useContainerStyles = function useContainerStyles(theme) {
  return {
    sm: {
      height: theme.sizes.sm
    },
    md: {
      height: theme.sizes.md
    },
    lg: {
      height: theme.sizes.lg
    }
  };
};
var useProgressStyles = (0, _variant.createVariantSystem)(
// @ts-ignore
function (theme) {
  return {
    borderRadius: theme.sizes.borderRadiusRounded
  };
}, function (theme) {
  return {
    primary: {
      backgroundColor: theme.primary
    },
    accent: {
      backgroundColor: theme.accent
    },
    positive: {
      backgroundColor: theme.positive
    },
    negative: {
      backgroundColor: theme.negative
    }
  };
});
var ProgressBar = function ProgressBar(_ref) {
  var percentage = _ref.percentage,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "sm" : _ref$height;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var styles = useStyles(theme);
  var containerStyles = useContainerStyles(theme);
  var progressStyles = useProgressStyles(theme, variant);
  var containerStyle = [styles.container, containerStyles[height], {
    backgroundColor: theme.derivedSurface[20]
  }];
  var progressWidth = {
    width: "".concat(Math.min(Math.max(percentage, 0), 100), "%")
  };
  return /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: containerStyle
  }, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: [styles.progress, progressStyles, progressWidth]
  }));
};
var _default = exports["default"] = ProgressBar;