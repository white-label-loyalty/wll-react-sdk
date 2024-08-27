"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _Text = _interopRequireDefault(require("react-native-web/dist/exports/Text"));
var _TouchableOpacity = _interopRequireDefault(require("react-native-web/dist/exports/TouchableOpacity"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
var _responsiveScaling = require("../../../utils/responsiveScaling");
var _variant = require("../../../utils/variant");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var styles = _StyleSheet["default"].create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 200
  },
  buttonInner: {
    paddingHorizontal: 14,
    paddingVertical: 9
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase"
  }
});
var useButtonStyles = (0, _variant.createVariantSystem)(styles.button, function (theme) {
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
var useTextStyles = (0, _variant.createVariantSystem)(styles.text, function (theme) {
  return {
    primary: {
      color: theme.primaryText
    },
    accent: {
      color: theme.accentText
    },
    positive: {
      color: theme.positiveText
    },
    negative: {
      color: theme.negativeText
    }
  };
});
var Button = function Button(_ref) {
  var title = _ref.title,
    onPress = _ref.onPress,
    variant = _ref.variant;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var _useResponsiveScale = (0, _responsiveScaling.useResponsiveScale)(),
    fs = _useResponsiveScale.fs;
  var buttonStyle = useButtonStyles(theme, variant);
  var textStyle = useTextStyles(theme, variant);
  return /*#__PURE__*/_react["default"].createElement(_TouchableOpacity["default"], {
    style: [buttonStyle, {
      borderRadius: theme.sizes.borderRadiusButton
    }],
    onPress: onPress
  }, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.buttonInner
  }, /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    style: [textStyle, {
      fontSize: fs(12)
    }]
  }, title)));
};
var _default = exports["default"] = Button;