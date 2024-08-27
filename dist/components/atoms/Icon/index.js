"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var LucideIcons = _interopRequireWildcard(require("lucide-react"));
var _react = _interopRequireDefault(require("react"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Icon = function Icon(_ref) {
  var name = _ref.name,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "black" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth;
  var LucideIcon = LucideIcons[name];
  if (!LucideIcon) {
    console.warn("Icon \"".concat(name, "\" not found in Lucide icons"));
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement(_View["default"], null, /*#__PURE__*/_react["default"].createElement(LucideIcon, {
    color: color,
    size: size,
    strokeWidth: strokeWidth
  }));
};
var _default = exports["default"] = Icon;