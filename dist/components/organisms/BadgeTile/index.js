"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _responsiveHelper = require("../../../utils/responsiveHelper");
var _atoms = require("../../atoms");
var _Section = require("../Section");
var _react = _interopRequireDefault(require("react"));
var _Image = _interopRequireDefault(require("react-native-web/dist/exports/Image"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var BadgeTile = function BadgeTile(_ref) {
  var configuration = _ref.configuration;
  var _useSectionContext = (0, _Section.useSectionContext)(),
    loading = _useSectionContext.loading;
  var badge = configuration.badge;
  return /*#__PURE__*/_react["default"].createElement(_atoms.Tile, null, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.imageContainer
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    source: {
      uri: badge === null || badge === void 0 ? void 0 : badge.artworkUrl
    },
    style: styles.image
  })), /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.textContainer
  }, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "title"
  }, badge === null || badge === void 0 ? void 0 : badge.name), /*#__PURE__*/_react["default"].createElement(_atoms.Icon, {
    name: "ChevronRight",
    size: 16,
    color: "#666"
  })), /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "body"
  }, badge === null || badge === void 0 ? void 0 : badge.description)));
};
var styles = _StyleSheet["default"].create({
  image: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  imageContainer: {
    width: "100%",
    flex: 1,
    position: "relative",
    overflow: "hidden"
  },
  textContainer: (0, _responsiveHelper.createResponsiveStyle)({
    padding: [8, 10, 12],
    flex: 1
  })
});
var _default = exports["default"] = BadgeTile;