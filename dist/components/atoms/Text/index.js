"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Text = void 0;
var _react = _interopRequireDefault(require("react"));
var _Text = _interopRequireDefault(require("react-native-web/dist/exports/Text"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _ThemeContext = require("../../../context/ThemeContext");
var _responsiveHelper = require("../../../utils/responsiveHelper");
var _excluded = ["variant", "style", "isSurface"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Text = exports.Text = function Text(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "body" : _ref$variant,
    style = _ref.style,
    _ref$isSurface = _ref.isSurface,
    isSurface = _ref$isSurface === void 0 ? false : _ref$isSurface,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var getVariantStyle = function getVariantStyle(variant) {
    var baseStyle = {
      color: theme.text
    };
    switch (variant) {
      case "eyebrow":
        return (0, _responsiveHelper.createResponsiveStyle)(_objectSpread({}, baseStyle));
      case "title":
        return (0, _responsiveHelper.createResponsiveStyle)(_objectSpread({}, baseStyle));
      case "subtitle":
        return (0, _responsiveHelper.createResponsiveStyle)(_objectSpread({}, baseStyle));
      case "body":
        return (0, _responsiveHelper.createResponsiveStyle)(_objectSpread({}, baseStyle));
      case "caption":
        return (0, _responsiveHelper.createResponsiveStyle)(_objectSpread({}, baseStyle));
      case "label":
        return (0, _responsiveHelper.createResponsiveStyle)(_objectSpread({}, baseStyle));
      default:
        return (0, _responsiveHelper.createResponsiveStyle)(_objectSpread({}, baseStyle));
    }
  };
  var variantStyle = getVariantStyle(variant);
  return /*#__PURE__*/_react["default"].createElement(_Text["default"], _extends({
    style: [styles.base, variantStyle, style]
  }, props));
};
var styles = _StyleSheet["default"].create({
  base: {}
});
var _default = exports["default"] = Text;