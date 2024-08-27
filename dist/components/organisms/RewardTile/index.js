"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _atoms = require("../../atoms");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var RewardTileContext = /*#__PURE__*/(0, _react.createContext)(undefined);
var RewardTile = function RewardTile(_ref) {
  var configuration = _ref.configuration,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(RewardTileContext.Provider, {
    value: {
      configuration: configuration
    }
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Tile, null, children));
};
var useRewardTileContext = function useRewardTileContext() {
  var context = (0, _react.useContext)(RewardTileContext);
  if (!context) {
    throw new Error("RewardTile compound components must be used within RewardTile");
  }
  return context;
};
RewardTile.Image = _atoms.Image;
RewardTile.Title = _atoms.Text;
RewardTile.Description = _atoms.Text;
RewardTile.Button = _atoms.Button;
var _default = exports["default"] = RewardTile;