"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Image = _interopRequireDefault(require("react-native-web/dist/exports/Image"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _Text = _interopRequireDefault(require("react-native-web/dist/exports/Text"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
var _atoms = require("../../atoms");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var RewardCategoryTile = function RewardCategoryTile(_ref) {
  var configuration = _ref.configuration;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var _ref2 = configuration || {},
    allowDecorationOverlay = _ref2.allowDecorationOverlay,
    rewardCategory = _ref2.rewardCategory;
  var _ref3 = rewardCategory || {},
    name = _ref3.name,
    pictureUrl = _ref3.pictureUrl;
  if (!rewardCategory) return null;
  return /*#__PURE__*/_react["default"].createElement(_atoms.Tile, null, allowDecorationOverlay && /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: [styles.overlay, {
      backgroundColor: theme.primary
    }]
  }, name && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    style: [styles.overlayText, {
      color: theme.primaryText
    }],
    ellipsizeMode: "tail",
    numberOfLines: 1
  }, name)), pictureUrl && /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    source: {
      uri: pictureUrl
    },
    style: styles.image,
    resizeMode: "cover",
    onError: function onError(error) {
      return console.error("Image loading error:", error);
    }
  }));
};
var styles = _StyleSheet["default"].create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  overlayText: {
    fontSize: 16,
    paddingHorizontal: 30
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
});
var _default = exports["default"] = RewardCategoryTile;