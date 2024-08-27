"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TileType = exports.TileHeight = exports.TierTileType = exports.TierTileConfig = exports.RewardTileConfig = exports.RewardCategoryTileConfig = exports.RewardCategory = exports.Reward = exports.PointsTileConfig = exports.CtaAction = exports.ContentTileConfig = exports.BannerTileConfig = exports.BadgeTileType = exports.BadgeTileConfig = void 0;
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var CtaAction = exports.CtaAction = /*#__PURE__*/function (CtaAction) {
  CtaAction["sameWindow"] = "SAME_WINDOW";
  CtaAction["newWindow"] = "NEW_WINDOW";
  return CtaAction;
}({});
var BadgeTileType = exports.BadgeTileType = /*#__PURE__*/function (BadgeTileType) {
  BadgeTileType["latestEarned"] = "LATEST_EARNED";
  BadgeTileType["specificBadge"] = "SPECIFIC_BADGE";
  return BadgeTileType;
}({});
var TierTileType = exports.TierTileType = /*#__PURE__*/function (TierTileType) {
  TierTileType["currentTier"] = "CURRENT_TIER";
  TierTileType["nextTier"] = "NEXT_TIER";
  TierTileType["specificTier"] = "SPECIFIC_TIER";
  return TierTileType;
}({});
var TileType = exports.TileType = /*#__PURE__*/function (TileType) {
  TileType["Banner"] = "BANNER";
  TileType["Points"] = "POINTS";
  TileType["Content"] = "CONTENT";
  TileType["Reward"] = "REWARD";
  TileType["Badge"] = "BADGE";
  TileType["RewardCategory"] = "REWARD_CATEGORY";
  TileType["Tier"] = "TIER";
  return TileType;
}({});
var TileHeight = exports.TileHeight = /*#__PURE__*/function (TileHeight) {
  TileHeight["Half"] = "HALF";
  TileHeight["Full"] = "FULL";
  return TileHeight;
}({});
var RewardCategory = exports.RewardCategory = /*#__PURE__*/_createClass(function RewardCategory() {
  _classCallCheck(this, RewardCategory);
});
var Reward = exports.Reward = /*#__PURE__*/_createClass(function Reward() {
  _classCallCheck(this, Reward);
});
var BannerTileConfig = exports.BannerTileConfig = /*#__PURE__*/_createClass(function BannerTileConfig(imageUrl, title, description, ctaText, ctaLink, ctaAction) {
  _classCallCheck(this, BannerTileConfig);
  this.imageUrl = imageUrl;
  this.title = title;
  this.description = description;
  this.ctaText = ctaText;
  this.ctaLink = ctaLink;
  this.ctaAction = ctaAction;
});
var PointsTileConfig = exports.PointsTileConfig = /*#__PURE__*/_createClass(function PointsTileConfig(title, multiplier, prefix, suffix, imageUrl) {
  _classCallCheck(this, PointsTileConfig);
  this.title = title;
  this.multiplier = multiplier;
  this.prefix = prefix;
  this.suffix = suffix;
  this.imageUrl = imageUrl;
});
var ContentTileConfig = exports.ContentTileConfig = /*#__PURE__*/_createClass(function ContentTileConfig(title, subtitle, imageUrl) {
  _classCallCheck(this, ContentTileConfig);
  this.title = title;
  this.subtitle = subtitle;
  this.imageUrl = imageUrl;
});
var RewardTileConfig = exports.RewardTileConfig = /*#__PURE__*/_createClass(function RewardTileConfig(rewardId, showPrice) {
  _classCallCheck(this, RewardTileConfig);
  this.rewardId = rewardId;
  this.showPrice = showPrice;
});
var BadgeTileConfig = exports.BadgeTileConfig = /*#__PURE__*/_createClass(function BadgeTileConfig(badgeTileType, badgeId) {
  _classCallCheck(this, BadgeTileConfig);
  this.badgeTileType = badgeTileType;
  this.badgeId = badgeId;
});
var RewardCategoryTileConfig = exports.RewardCategoryTileConfig = /*#__PURE__*/_createClass(function RewardCategoryTileConfig(categoryId, allowDecorationOverlay) {
  _classCallCheck(this, RewardCategoryTileConfig);
  this.categoryId = categoryId;
  this.allowDecorationOverlay = allowDecorationOverlay;
});
var TierTileConfig = exports.TierTileConfig = /*#__PURE__*/_createClass(function TierTileConfig(tierTileType, tierId) {
  _classCallCheck(this, TierTileConfig);
  this.tierTileType = tierTileType;
  this.tierId = tierId;
});
var getConfigForTileType = function getConfigForTileType(tileType) {
  switch (tileType) {
    case TileType.Banner:
      return BannerTileConfig;
    case TileType.Points:
      return PointsTileConfig;
    case TileType.Content:
      return ContentTileConfig;
    case TileType.Reward:
      return RewardTileConfig;
    case TileType.Badge:
      return BadgeTileConfig;
    case TileType.RewardCategory:
      return RewardCategoryTileConfig;
    case TileType.Tier:
      return TierTileConfig;
    default:
      throw new Error("Tile type ".concat(tileType, " is not supported"));
  }
};