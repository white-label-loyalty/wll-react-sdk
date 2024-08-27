"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TierAttainedEarly = exports.TierAttained = exports.NoTierData = exports.NearlyComplete = exports.JustStarted = exports.InProgress = void 0;
var _react = _interopRequireDefault(require("react"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "components/organisms/TierTile",
  component: _["default"],
  argTypes: {
    configuration: {
      control: "object"
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_View["default"], {
      style: {
        width: 257,
        alignContent: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement(Story, null));
  }]
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_["default"], args);
};
var InProgress = exports.InProgress = Template.bind({});
InProgress.args = {
  configuration: {
    tier: {
      name: "Gold",
      earnedPoints: 500,
      pointsRequirement: 1000,
      attained: false
    }
  }
};
var JustStarted = exports.JustStarted = Template.bind({});
JustStarted.args = {
  configuration: {
    tier: {
      name: "Silver",
      earnedPoints: 50,
      pointsRequirement: 500,
      attained: false
    }
  }
};
var NearlyComplete = exports.NearlyComplete = Template.bind({});
NearlyComplete.args = {
  configuration: {
    tier: {
      name: "Platinum",
      earnedPoints: 1900,
      pointsRequirement: 2000,
      attained: false
    }
  }
};
var TierAttained = exports.TierAttained = Template.bind({});
TierAttained.args = {
  configuration: {
    tier: {
      name: "Diamond",
      earnedPoints: 5000,
      pointsRequirement: 5000,
      attained: true
    }
  }
};
var TierAttainedEarly = exports.TierAttainedEarly = Template.bind({});
TierAttainedEarly.args = {
  configuration: {
    tier: {
      name: "VIP",
      earnedPoints: 8000,
      pointsRequirement: 10000,
      attained: true
    }
  }
};
var NoTierData = exports.NoTierData = Template.bind({});
NoTierData.args = {
  configuration: null
};