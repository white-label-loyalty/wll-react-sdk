"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _color = _interopRequireDefault(require("color"));
var _react = _interopRequireDefault(require("react"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
var _Section = require("../../organisms/Section");
var _LoadingIndicator = _interopRequireDefault(require("../LoadingIndicator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Tile = function Tile(_ref) {
  var children = _ref.children;
  var _useSectionContext = (0, _Section.useSectionContext)(),
    isLoading = _useSectionContext.loading;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: [styles.container, {
      backgroundColor: theme.surface,
      borderColor: (0, _color["default"])(theme.surface).darken(0.02).string(),
      borderRadius: theme.sizes.borderRadius
    }]
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_LoadingIndicator["default"], null) : children);
};
var styles = _StyleSheet["default"].create({
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
    maxWidth: 270,
    borderWidth: 1,
    aspectRatio: 1
    // shadowColor: "#AAAAAA",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3,
  }
});
var _default = exports["default"] = Tile;