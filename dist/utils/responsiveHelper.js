"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResponsiveStyle = void 0;
var _Dimensions = _interopRequireDefault(require("react-native-web/dist/exports/Dimensions"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Define breakpoints
var BREAKPOINTS = {
  MOBILE: 0,
  TABLET: 600,
  DESKTOP: 1024
};
var createResponsiveStyle = exports.createResponsiveStyle = function createResponsiveStyle(style) {
  var windowWidth = _Dimensions["default"].get("window").width;
  var responsiveStyle = Object.entries(style).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (Array.isArray(value)) {
      if (windowWidth > BREAKPOINTS.DESKTOP) {
        acc[key] = value[2] || value[1] || value[0]; // Desktop value or fallback to tablet
      } else if (windowWidth > BREAKPOINTS.TABLET) {
        acc[key] = value[1] || value[0]; // Tablet value or fallback to mobile
      } else {
        acc[key] = value[0]; // Mobile value or fallback to first value
      }
    } else {
      acc[key] = value; // No responsive value, just return the value
    }
    return acc;
  }, {});
  return responsiveStyle;
};