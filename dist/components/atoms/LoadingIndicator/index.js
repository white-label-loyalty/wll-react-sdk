"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ActivityIndicator = _interopRequireDefault(require("react-native-web/dist/exports/ActivityIndicator"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LoadingIndicator = function LoadingIndicator() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: [styles.container, {
      backgroundColor: theme.surface,
      borderRadius: theme.sizes.borderRadius,
      padding: theme.sizes.md
    }]
  }, /*#__PURE__*/_react["default"].createElement(_ActivityIndicator["default"], {
    size: "small",
    color: theme.primary
  }));
};
var styles = _StyleSheet["default"].create({
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  }
});
var _default = exports["default"] = LoadingIndicator;