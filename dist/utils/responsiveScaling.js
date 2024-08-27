"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResponsiveScale = void 0;
var _useWindowDimensions2 = _interopRequireDefault(require("react-native-web/dist/exports/useWindowDimensions"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var BASE_WIDTH = 375;
var MAX_WIDTH = 1080;
var useResponsiveScale = exports.useResponsiveScale = function useResponsiveScale() {
  var _useWindowDimensions = (0, _useWindowDimensions2["default"])(),
    SCREEN_WIDTH = _useWindowDimensions.width;
  var responsiveScale = function responsiveScale(size) {
    var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
    var scale = SCREEN_WIDTH / BASE_WIDTH;

    // If screen is wider than MAX_WIDTH, slow down the scaling
    if (SCREEN_WIDTH > MAX_WIDTH) {
      scale = MAX_WIDTH / BASE_WIDTH + (SCREEN_WIDTH - MAX_WIDTH) / (BASE_WIDTH * 4);
    }
    var newSize = size + (scale - 1) * size * factor;
    return Math.round(newSize);
  };
  return {
    rs: responsiveScale,
    fs: function fs(size) {
      return responsiveScale(size, 0.2);
    },
    ms: function ms(size) {
      return responsiveScale(size, 0.4);
    },
    ps: function ps(size) {
      return responsiveScale(size, 0.4);
    }
  };
};