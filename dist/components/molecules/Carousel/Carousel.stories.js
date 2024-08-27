"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SingleItem = exports.ManyItems = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _tile = require("../../../types/tile");
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/molecules/Carousel",
  component: _index["default"],
  argTypes: {
    section: {
      control: "object"
    }
  }
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], args);
};
var createMockTile = function createMockTile(config) {
  return {
    id: Math.random().toString(36).substr(2, 9),
    type: _tile.TileType.Banner,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: "mock-tenant-id",
    visibilityCriteria: "",
    tileHeight: _tile.TileHeight.Full,
    configuration: new _tile.BannerTileConfig(config.imageUrl, config.title, config.description, config.ctaText, config.ctaLink, config.ctaAction)
  };
};
var createMockSection = function createMockSection(title, description, tiles) {
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: title,
    description: description,
    tiles: tiles,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: "mock-tenant-id"
  };
};
var Default = exports.Default = Template.bind({});
Default.args = {
  section: createMockSection("Featured Offers", "Check out our latest promotions and deals!", [createMockTile({
    title: "Refer a friend",
    imageUrl: "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg",
    description: "Click here to share your unique referral link with friends!",
    ctaText: "REFER NOW",
    ctaAction: _tile.CtaAction.sameWindow
  }), createMockTile({
    title: "Summer Sale",
    imageUrl: "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg",
    description: "Enjoy up to 50% off on selected items. Limited time offer!",
    ctaText: "SHOP NOW",
    ctaAction: _tile.CtaAction.newWindow,
    ctaLink: "https://www.example.com"
  }), createMockTile({
    title: "New Collection",
    imageUrl: "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg",
    description: "Check out our latest arrivals for this season.",
    ctaText: "EXPLORE",
    ctaAction: _tile.CtaAction.sameWindow,
    ctaLink: "https://www.example.com"
  })])
};
var SingleItem = exports.SingleItem = Template.bind({});
SingleItem.args = {
  section: createMockSection("Special Promotion", "Don't miss out on this exclusive offer!", [createMockTile({
    title: "Special Offer",
    description: "Get a free gift with any purchase over $50.",
    ctaText: "CLAIM NOW",
    imageUrl: "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg",
    ctaAction: _tile.CtaAction.sameWindow,
    ctaLink: "https://www.example.com"
  })])
};
var ManyItems = exports.ManyItems = Template.bind({});
ManyItems.args = {
  section: createMockSection("All Promotions", "Browse through our extensive list of current promotions.", Array(10).fill(null).map(function (_, index) {
    return createMockTile({
      title: "Offer ".concat(index + 1),
      imageUrl: "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg",
      description: "This is the description for offer number ".concat(index + 1, "."),
      ctaText: "ACTION ".concat(index + 1),
      ctaAction: index % 2 === 0 ? _tile.CtaAction.sameWindow : _tile.CtaAction.newWindow
    });
  }))
};