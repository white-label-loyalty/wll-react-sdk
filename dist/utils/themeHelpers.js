"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReadableTextColor = exports.getDerivedColorPercentages = exports.getDerivedColor = void 0;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var getDerivedColor = exports.getDerivedColor = function getDerivedColor(color) {
  var backgroundColor = (0, _color["default"])(color);
  return backgroundColor.isDark() ? backgroundColor.lighten(0.2).string() : backgroundColor.darken(0.2).string();
};
var getReadableTextColor = exports.getReadableTextColor = function getReadableTextColor(backgroundColor) {
  var bgColor = (0, _color["default"])(backgroundColor);
  var white = (0, _color["default"])("#fff");
  var black = (0, _color["default"])("#000");

  // Calculate contrast ratio with white
  var contrastWithWhite = bgColor.contrast(white);

  // If contrast with white is at least 2:1, use white; otherwise, use black
  return contrastWithWhite >= 2 ? white.hex() : black.hex();
};
var getDerivedColorPercentages = exports.getDerivedColorPercentages = function getDerivedColorPercentages(color) {
  var baseColor = (0, _color["default"])(color);
  var isDark = baseColor.isDark();
  var percentages = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95];
  var result = {};
  percentages.forEach(function (percentage) {
    var derivedColor;
    if (isDark) {
      // For dark colors, lighten
      derivedColor = baseColor.lighten(percentage / 100);
    } else {
      // For light colors, darken
      derivedColor = baseColor.darken(percentage / 100);
    }
    result[percentage] = derivedColor.hex();
  });
  return result;
};