"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _atoms = require("../../atoms");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SectionHeader = function SectionHeader(_ref) {
  var title = _ref.title,
    description = _ref.description;
  return /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.sectionHeader
  }, title || description ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, title && /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "title",
    style: styles.sectionTitle
  }, title), description && /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "body",
    style: styles.sectionDescription
  }, description)) : null);
};
var styles = _StyleSheet["default"].create({
  sectionHeader: {
    marginBottom: 20,
    paddingHorizontal: 15
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8
  },
  sectionDescription: {
    fontSize: 16,
    color: "#666"
  }
});
var _default = exports["default"] = SectionHeader;