"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Image = _interopRequireDefault(require("react-native-web/dist/exports/Image"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
var _atoms = require("../../atoms");
var _Section = require("../Section");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PointsTile = function PointsTile(_ref) {
  var _ref2, _ref3, _ref4;
  var configuration = _ref.configuration;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var _useSectionContext = (0, _Section.useSectionContext)(),
    sectionData = _useSectionContext.sectionData;
  var title = configuration.title,
    tileMultiplier = configuration.multiplier,
    tilePrefix = configuration.prefix,
    tileSuffix = configuration.suffix,
    imageUrl = configuration.imageUrl,
    points = configuration.points;
  var effectiveMultiplier = (_ref2 = tileMultiplier !== null && tileMultiplier !== void 0 ? tileMultiplier : sectionData === null || sectionData === void 0 ? void 0 : sectionData.pointsMultiplier) !== null && _ref2 !== void 0 ? _ref2 : 1;
  var effectivePrefix = (_ref3 = tilePrefix !== null && tilePrefix !== void 0 ? tilePrefix : sectionData === null || sectionData === void 0 ? void 0 : sectionData.pointsPrefix) !== null && _ref3 !== void 0 ? _ref3 : "";
  var effectiveSuffix = (_ref4 = tileSuffix !== null && tileSuffix !== void 0 ? tileSuffix : sectionData === null || sectionData === void 0 ? void 0 : sectionData.pointsSuffix) !== null && _ref4 !== void 0 ? _ref4 : "pts";
  var calculatedPoints = points !== undefined ? points * effectiveMultiplier : null;
  var styles = _StyleSheet["default"].create({
    container: {
      padding: theme.sizes.md,
      maxWidth: 270,
      borderRadius: theme.sizes.borderRadius,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      aspectRatio: 2
    },
    title: {
      marginBottom: 4,
      color: theme.text
    },
    points: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.primary
    },
    image: {
      width: theme.sizes.lg * 3,
      height: theme.sizes.lg * 3
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_atoms.Tile, null, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_View["default"], null, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    style: styles.title
  }, title), calculatedPoints !== null && /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    style: styles.points
  }, effectivePrefix, calculatedPoints, effectiveSuffix)), imageUrl && /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    source: {
      uri: imageUrl
    },
    style: styles.image
  })));
};
var _default = exports["default"] = PointsTile;