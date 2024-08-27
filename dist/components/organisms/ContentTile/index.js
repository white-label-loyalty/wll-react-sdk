"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Image = _interopRequireDefault(require("react-native-web/dist/exports/Image"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _responsiveHelper = require("../../../utils/responsiveHelper");
var _atoms = require("../../atoms");
var _Section = require("../Section");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ContentTile = function ContentTile(_ref) {
  var configuration = _ref.configuration;
  var _useSectionContext = (0, _Section.useSectionContext)(),
    loading = _useSectionContext.loading;
  if (!configuration) return null;
  var title = configuration.title,
    subtitle = configuration.subtitle,
    imageUrl = configuration.imageUrl;
  var responsiveStyles = {
    title: (0, _responsiveHelper.createResponsiveStyle)({
      marginBottom: [4, 8, 12]
    })
  };
  return /*#__PURE__*/_react["default"].createElement(_atoms.Tile, null, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.textContainer
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "title",
    style: responsiveStyles.title
  }, title), /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "body"
  }, subtitle)), imageUrl && /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    source: {
      uri: imageUrl
    },
    style: styles.image,
    resizeMode: "cover"
  }));
};
var styles = _StyleSheet["default"].create({
  textContainer: {
    width: "100%",
    position: "relative",
    zIndex: 10,
    paddingHorizontal: 8
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute"
  }
});
var _default = exports["default"] = ContentTile;