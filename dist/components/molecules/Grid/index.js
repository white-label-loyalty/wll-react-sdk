"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _useWindowDimensions2 = _interopRequireDefault(require("react-native-web/dist/exports/useWindowDimensions"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _tile = require("../../../types/tile");
var _responsiveScaling = require("../../../utils/responsiveScaling");
var _atoms = require("../../atoms");
var _molecules = require("../../molecules");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Grid = function Grid(_ref) {
  var section = _ref.section;
  var _useResponsiveScale = (0, _responsiveScaling.useResponsiveScale)(),
    ps = _useResponsiveScale.ps;
  var _useWindowDimensions = (0, _useWindowDimensions2["default"])(),
    width = _useWindowDimensions.width;
  var isDesktop = width >= 700;
  var columnsPerRow = isDesktop ? 4 : 2;
  var renderGrid = function renderGrid() {
    var tileContainers = [];
    var currentTiles = [];
    // Filter out banner tiles
    var gridTiles = section.tiles.filter(function (tile) {
      return tile.type !== _tile.TileType.Banner;
    });
    gridTiles.forEach(function (tile, index) {
      currentTiles.push(tile);
      if (currentTiles.length === 2 || tile.tileHeight === _tile.TileHeight.Full || index === gridTiles.length - 1) {
        tileContainers.push( /*#__PURE__*/_react["default"].createElement(_View["default"], {
          key: "container-".concat(index),
          style: {
            width: "".concat(100 / columnsPerRow, "%"),
            padding: ps(8)
          }
        }, /*#__PURE__*/_react["default"].createElement(_atoms.TileContainer, {
          tiles: currentTiles
        })));
        currentTiles = [];
      }
    });
    return tileContainers;
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_molecules.SectionHeader, {
    title: section.title,
    description: section.description
  }), /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.grid
  }, renderGrid()), ";");
};
var styles = _StyleSheet["default"].create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
var _default = exports["default"] = Grid;