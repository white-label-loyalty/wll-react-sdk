"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NoDecorationOverlay = exports.LongCategoryName = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/organisms/RewardCategoryTile",
  component: _index["default"]
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], args);
};
var Default = exports.Default = Template.bind({});
Default.args = {
  configuration: {
    allowDecorationOverlay: true,
    rewardCategory: {
      name: "Restaurants",
      pictureUrl: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
    }
  }
};
var LongCategoryName = exports.LongCategoryName = Template.bind({});
LongCategoryName.args = {
  configuration: {
    allowDecorationOverlay: true,
    rewardCategory: {
      name: "This is a really really really long title that should overflow its parent.",
      pictureUrl: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
    }
  }
};
var NoDecorationOverlay = exports.NoDecorationOverlay = Template.bind({});
NoDecorationOverlay.args = {
  configuration: {
    allowDecorationOverlay: false,
    rewardCategory: {
      name: "Restaurants",
      pictureUrl: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
    }
  }
};