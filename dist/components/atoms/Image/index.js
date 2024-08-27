"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Image = _interopRequireDefault(require("react-native-web/dist/exports/Image"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _excluded = ["roundedCorners", "borderRadius", "aspectRatio", "style"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Image = function Image(_ref) {
  var roundedCorners = _ref.roundedCorners,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? 8 : _ref$borderRadius,
    aspectRatio = _ref.aspectRatio,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);
  var imageStyle = _StyleSheet["default"].flatten([styles.image, roundedCorners && {
    borderRadius: borderRadius
  }, aspectRatio !== undefined && {
    aspectRatio: aspectRatio
  }, style]);
  return /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], _extends({
    style: imageStyle
  }, rest)));
};
var styles = _StyleSheet["default"].create({
  container: {
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: undefined
  }
});
var _default = exports["default"] = Image;