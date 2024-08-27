"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
var _tile = require("../../../types/tile");
var _responsiveScaling = require("../../../utils/responsiveScaling");
var _atoms = require("../../atoms");
var _molecules = require("../../molecules");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// @ts-nocheck
// TODO: Fix this file

var TierTile = function TierTile(_ref) {
  var configuration = _ref.configuration;
  if (!(configuration !== null && configuration !== void 0 && configuration.tier)) return null;
  var renderTierTileContent = function renderTierTileContent() {
    switch (configuration.type) {
      case _tile.TierTileType.Next:
        return /*#__PURE__*/_react["default"].createElement(NextTierTile, {
          configuration: configuration
        });
      case _tile.TierTileType.Current:
        return /*#__PURE__*/_react["default"].createElement(CurrentTierTile, {
          configuration: configuration
        });
      case _tile.TierTileType.Specific:
      default:
        return /*#__PURE__*/_react["default"].createElement(SpecificTierTile, {
          configuration: configuration
        });
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_atoms.Tile, null, renderTierTileContent());
};
var SpecificTierTile = function SpecificTierTile(_ref2) {
  var configuration = _ref2.configuration;
  var _useResponsiveScale = (0, _responsiveScaling.useResponsiveScale)(),
    ms = _useResponsiveScale.ms,
    ps = _useResponsiveScale.ps;
  var tier = configuration.tier;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: {
      paddingHorizontal: ps(8),
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: {
      marginBottom: ms(2)
    }
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    style: {
      color: theme.derivedSurfaceText[20]
    }
  }, "Hello World"), /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "eyebrow"
  }, "Tier"), /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "title"
  }, tier.name)), /*#__PURE__*/_react["default"].createElement(_molecules.ProgressIndicator, {
    currentPoints: tier.attained ? tier.pointsRequirement : tier.earnedPoints,
    maxPoints: tier.pointsRequirement,
    variant: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: {
      marginTop: ms(2)
    }
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "caption"
  }, tier.earnedPoints, " / ", tier.pointsRequirement, "pts"), tier.attained && /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "label",
    style: {
      marginTop: ms(1)
    }
  }, "You reached ", tier.name, "!")));
};
var NextTierTile = function NextTierTile(_ref3) {
  var configuration = _ref3.configuration;
  var _useResponsiveScale2 = (0, _responsiveScaling.useResponsiveScale)(),
    ms = _useResponsiveScale2.ms;
  var tier = configuration.tier;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: {
      marginBottom: ms(2)
    }
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "eyebrow"
  }, "Next Tier"), /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "title"
  }, tier.name)), /*#__PURE__*/_react["default"].createElement(_molecules.ProgressIndicator, {
    currentPoints: tier.earnedPoints,
    maxPoints: tier.pointsRequirement,
    variant: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: {
      marginTop: ms(2)
    }
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "caption"
  }, tier.earnedPoints, " / ", tier.pointsRequirement, "pts")));
};
var CurrentTierTile = function CurrentTierTile(_ref4) {
  var configuration = _ref4.configuration;
  var _useResponsiveScale3 = (0, _responsiveScaling.useResponsiveScale)(),
    ms = _useResponsiveScale3.ms;
  var tier = configuration.tier;
  console.log(configuration, "configuration");
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: {
      marginBottom: ms(2)
    }
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "eyebrow"
  }, "Current Tier"), /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "title"
  }, tier.name)), /*#__PURE__*/_react["default"].createElement(_molecules.ProgressIndicator, {
    currentPoints: tier.earnedPoints,
    maxPoints: tier.pointsRequirement,
    variant: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: {
      marginTop: ms(2)
    }
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Text, {
    variant: "caption"
  }, tier.earnedPoints, " / ", tier.pointsRequirement, "pts")));
};
var _default = exports["default"] = TierTile;