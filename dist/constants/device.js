"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCREEN_WIDTH = exports.SCREEN_HEIGHT = exports.IS_WEB = exports.IS_MOBILE = exports.IS_IOS = exports.IS_DESKTOP = exports.IS_ANDROID = void 0;
var _Dimensions = _interopRequireDefault(require("react-native-web/dist/exports/Dimensions"));
var _Platform = _interopRequireDefault(require("react-native-web/dist/exports/Platform"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var IS_WEB = exports.IS_WEB = _Platform["default"].OS === "web";
var IS_IOS = exports.IS_IOS = _Platform["default"].OS === "ios";
var IS_ANDROID = exports.IS_ANDROID = _Platform["default"].OS === "android";
var IS_MOBILE = exports.IS_MOBILE = IS_IOS || IS_ANDROID;
var IS_DESKTOP = exports.IS_DESKTOP = !IS_MOBILE;
var _Dimensions$get = _Dimensions["default"].get("window"),
  width = _Dimensions$get.width,
  height = _Dimensions$get.height;
var SCREEN_WIDTH = exports.SCREEN_WIDTH = width;
var SCREEN_HEIGHT = exports.SCREEN_HEIGHT = height;