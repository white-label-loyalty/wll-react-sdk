"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GridWithoutTitleAndDescription = exports.GridWithTitleAndDescription = exports.BannerWithoutTileAndDescription = exports.BannerWithTitleAndDescription = exports.BannerWithSingleBanner = void 0;
var _react = _interopRequireDefault(require("react"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _organisms = require("../../../components/organisms");
var _section = require("../../../types/section");
var _tile = require("../../../types/tile");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/organisms/Section",
  component: _organisms.Section,
  args: {
    section: {
      id: "1"
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_View["default"], {
      style: {
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement(Story, null));
  }]
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_organisms.Section, args);
};
var GridWithTitleAndDescription = exports.GridWithTitleAndDescription = Template.bind({});
GridWithTitleAndDescription.args = {
  section: {
    id: "1",
    type: _section.SectionType.Grid,
    title: "Featured Offers",
    description: "Check out our latest promotions!",
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: "tenant1",
    visibilityCriteria: "all",
    tiles: [{
      id: "1",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: {
        tierTileType: _tile.TierTileType.currentTier,
        tierId: "1",
        name: "Gold",
        earnedPoints: 500,
        pointsRequirement: 1000,
        attained: false
      }
    }, {
      id: "2",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Half,
      configuration: {
        tierTileType: _tile.TierTileType.nextTier,
        tierId: "2",
        name: "Gold",
        earnedPoints: 500,
        pointsRequirement: 1000,
        attained: false
      }
    }, {
      id: "3",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Half,
      configuration: {
        tierTileType: _tile.TierTileType.specificTier,
        tierId: "3",
        name: "Gold",
        earnedPoints: 500,
        pointsRequirement: 1000,
        attained: false
      }
    }, {
      id: "4",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: {
        tierTileType: _tile.TierTileType.currentTier,
        tierId: "4",
        name: "Gold",
        earnedPoints: 500,
        pointsRequirement: 1000,
        attained: false
      }
    }, {
      id: "2",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Half,
      configuration: {
        tierTileType: _tile.TierTileType.nextTier,
        tierId: "2",
        name: "Gold",
        earnedPoints: 500,
        pointsRequirement: 1000,
        attained: false
      }
    }, {
      id: "3",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Half,
      configuration: {
        tierTileType: _tile.TierTileType.specificTier,
        tierId: "3",
        // TODO: Add logic to fetch the tier data from the API at the moment just using fake data to style components
        name: "Gold",
        earnedPoints: 500,
        pointsRequirement: 1000,
        attained: false
      }
    }]
  }
};
var GridWithoutTitleAndDescription = exports.GridWithoutTitleAndDescription = Template.bind({});
GridWithoutTitleAndDescription.args = {
  section: {
    id: "1",
    type: _section.SectionType.Grid,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: "tenant1",
    visibilityCriteria: "all",
    tiles: [{
      id: "1",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: {
        tierTileType: _tile.TierTileType.currentTier,
        tierId: "1",
        // TODO Add logic to fetch the tier data from the API at the moment just using fake data to style components
        name: "Gold",
        earnedPoints: 500,
        pointsRequirement: 1000,
        attained: false
      }
    }, {
      id: "2",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Half,
      configuration: {
        tierTileType: _tile.TierTileType.nextTier,
        tierId: "2",
        name: "Silver",
        earnedPoints: 50,
        pointsRequirement: 500,
        attained: false
      }
    }, {
      id: "3",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Half,
      configuration: {
        tierTileType: _tile.TierTileType.specificTier,
        tierId: "3",
        name: "Platinum",
        earnedPoints: 1900,
        pointsRequirement: 2000,
        attained: false
      }
    }, {
      id: "4",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: {
        tierTileType: _tile.TierTileType.currentTier,
        tierId: "4",
        name: "Diamond",
        earnedPoints: 5000,
        pointsRequirement: 5000,
        attained: true
      }
    }, {
      id: "2",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Half,
      configuration: {
        tierTileType: _tile.TierTileType.nextTier,
        tierId: "2",
        name: "Diamond",
        earnedPoints: 5000,
        pointsRequirement: 5000,
        attained: true
      }
    }, {
      id: "3",
      type: _tile.TileType.Tier,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Half,
      configuration: {
        tierTileType: _tile.TierTileType.specificTier,
        tierId: "3",
        name: "VIP",
        earnedPoints: 8000,
        pointsRequirement: 10000,
        attained: true
      }
    }]
  }
};
var BannerWithTitleAndDescription = exports.BannerWithTitleAndDescription = Template.bind({});
BannerWithTitleAndDescription.args = {
  section: {
    id: "2",
    type: _section.SectionType.Banner,
    title: "Featured Offers",
    description: "Check out our latest promotions!",
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: "tenant1",
    visibilityCriteria: "all",
    tiles: [{
      id: "banner1",
      type: _tile.TileType.Banner,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: new _tile.BannerTileConfig("https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg", "Summer Sale", "Get up to 50% off on selected items!", "Shop Now", "https://whitelabel-loyalty.com", _tile.CtaAction.sameWindow)
    }, {
      id: "banner2",
      type: _tile.TileType.Banner,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: new _tile.BannerTileConfig("https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg", "New Arrivals", "Check out our latest collection!", "Explore", "https://whitelabel-loyalty.com", _tile.CtaAction.sameWindow)
    }, {
      id: "banner3",
      type: _tile.TileType.Banner,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: new _tile.BannerTileConfig("https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg", "Win Big!", "When you do X,Y and Z you’ll get A,B or C!", "Find out more", "https://whitelabel-loyalty.com", _tile.CtaAction.sameWindow)
    }]
  }
};
var BannerWithoutTileAndDescription = exports.BannerWithoutTileAndDescription = Template.bind({});
BannerWithoutTileAndDescription.args = {
  section: {
    id: "2",
    type: _section.SectionType.Banner,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: "tenant1",
    visibilityCriteria: "all",
    tiles: [{
      id: "banner1",
      type: _tile.TileType.Banner,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: new _tile.BannerTileConfig("https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg", "Summer Sale", "Get up to 50% off on selected items!", "Shop Now", "https://whitelabel-loyalty.com", _tile.CtaAction.sameWindow)
    }, {
      id: "banner2",
      type: _tile.TileType.Banner,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: new _tile.BannerTileConfig("https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg", "New Arrivals", "Check out our latest collection!", "Explore", "https://whitelabel-loyalty.com", _tile.CtaAction.sameWindow)
    }, {
      id: "banner3",
      type: _tile.TileType.Banner,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: new _tile.BannerTileConfig("https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg", "Win Big!", "When you do X,Y and Z you’ll get A,B or C!", "Find out more", "https://whitelabel-loyalty.com", _tile.CtaAction.sameWindow)
    }]
  }
};
var BannerWithSingleBanner = exports.BannerWithSingleBanner = Template.bind({});
BannerWithSingleBanner.args = {
  section: {
    id: "2",
    type: _section.SectionType.Banner,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: "tenant1",
    visibilityCriteria: "all",
    tiles: [{
      id: "banner1",
      type: _tile.TileType.Banner,
      createdAt: new Date(),
      updatedAt: new Date(),
      tenantId: "tenant1",
      visibilityCriteria: "all",
      tileHeight: _tile.TileHeight.Full,
      configuration: new _tile.BannerTileConfig("https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg", "Summer Sale", "Get up to 50% off on selected items!", "Shop Now", "https://whitelabel-loyalty.com", _tile.CtaAction.sameWindow)
    }]
  }
};