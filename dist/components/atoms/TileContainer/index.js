"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tile = require("../../../types/tile");
var _responsiveScaling = require("../../../utils/responsiveScaling");
var _organisms = require("../../organisms");
var _react = _interopRequireDefault(require("react"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TileContainer = function TileContainer(_ref) {
  var tiles = _ref.tiles;
  var _useResponsiveScale = (0, _responsiveScaling.useResponsiveScale)(),
    ps = _useResponsiveScale.ps,
    ms = _useResponsiveScale.ms;
  var renderTile = function renderTile(tile) {
    switch (tile.type) {
      case _tile.TileType.Banner:
        {
          var config = tile.configuration;
          return /*#__PURE__*/_react["default"].createElement(_organisms.BannerTile, {
            configuration: config
          });
        }
      case _tile.TileType.Points:
        {
          var _config = tile.configuration;
          return /*#__PURE__*/_react["default"].createElement(_organisms.PointsTile, {
            configuration: _config
          });
        }
      case _tile.TileType.Content:
        {
          var _config2 = tile.configuration;
          return /*#__PURE__*/_react["default"].createElement(_organisms.ContentTile, {
            configuration: _config2
          });
        }
      case _tile.TileType.Reward:
        {
          var _config3 = tile.configuration;
          // @ts-ignore
          return /*#__PURE__*/_react["default"].createElement(_organisms.RewardTile, {
            configuration: _config3
          });
        }
      case _tile.TileType.Badge:
        {
          var _config4 = tile.configuration;
          return /*#__PURE__*/_react["default"].createElement(_organisms.BadgeTile, {
            configuration: _config4
          });
        }
      case _tile.TileType.RewardCategory:
        {
          var _config5 = tile.configuration;
          // @ts-ignore we know this is wrong for the time being.
          return /*#__PURE__*/_react["default"].createElement(_organisms.RewardCategoryTile, {
            configuration: _config5
          });
        }
      case _tile.TileType.Tier:
        {
          var _config6 = tile.configuration;
          return /*#__PURE__*/_react["default"].createElement(_organisms.TierTile, {
            configuration: _config6
          });
        }
      default:
        throw new Error("Unsupported tile type: ".concat(tile.type));
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.container
  }, tiles.map(function (tile, index) {
    return /*#__PURE__*/_react["default"].createElement(_View["default"], {
      key: tile.id,
      style: [styles.tileContainer, {
        marginBottom: index === tiles.length - 1 ? 0 : ms(15)
      }]
    }, renderTile(tile));
  }));
};
var styles = _StyleSheet["default"].create({
  container: {
    flexDirection: "column",
    aspectRatio: 1
  },
  tileContainer: {
    flex: 1
  }
});
var _default = exports["default"] = TileContainer;