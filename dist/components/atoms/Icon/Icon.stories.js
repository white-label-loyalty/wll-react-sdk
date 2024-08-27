"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThinStroke = exports.LargeIcon = exports.Default = exports.CustomColor = void 0;
var LucideIcons = _interopRequireWildcard(require("lucide-react"));
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  title: "components/atoms/Icon",
  component: _["default"],
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(LucideIcons)
    },
    color: {
      control: "color"
    },
    size: {
      control: {
        type: "range",
        min: 12,
        max: 96,
        step: 4
      }
    },
    strokeWidth: {
      control: {
        type: "range",
        min: 0.5,
        max: 4,
        step: 0.5
      }
    }
  }
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_["default"], args);
};
var Default = exports.Default = Template.bind({});
Default.args = {
  name: "ChevronRight",
  color: "black",
  size: 24,
  strokeWidth: 2
};
var CustomColor = exports.CustomColor = Template.bind({});
CustomColor.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  name: "Heart",
  color: "red"
});
var LargeIcon = exports.LargeIcon = Template.bind({});
LargeIcon.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  name: "Star",
  size: 48
});
var ThinStroke = exports.ThinStroke = Template.bind({});
ThinStroke.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  name: "User",
  strokeWidth: 1
});