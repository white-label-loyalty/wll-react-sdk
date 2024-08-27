"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ScrollView = _interopRequireDefault(require("react-native-web/dist/exports/ScrollView"));
var _StyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet"));
var _TouchableOpacity = _interopRequireDefault(require("react-native-web/dist/exports/TouchableOpacity"));
var _View = _interopRequireDefault(require("react-native-web/dist/exports/View"));
var _ThemeContext = require("../../../context/ThemeContext");
var _tile = require("../../../types/tile");
var _atoms = require("../../atoms");
var _molecules = require("../../molecules");
var _organisms = require("../../organisms");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Carousel = function Carousel(_ref) {
  var section = _ref.section;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var scrollViewRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var slideWidth = 1080;
  var bannerTiles = section.tiles.filter(function (tile) {
    return tile.type === _tile.TileType.Banner;
  });
  var handleScroll = function handleScroll(event) {
    var contentOffsetX = event.nativeEvent.contentOffset.x;
    var newIndex = Math.round(contentOffsetX / slideWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };
  var handleScrollEnd = function handleScrollEnd(event) {
    var contentOffsetX = event.nativeEvent.contentOffset.x;
    var newIndex = Math.round(contentOffsetX / slideWidth);
    setCurrentIndex(newIndex);
  };
  var handlePrev = function handlePrev() {
    var _scrollViewRef$curren;
    var newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    (_scrollViewRef$curren = scrollViewRef.current) === null || _scrollViewRef$curren === void 0 || _scrollViewRef$curren.scrollTo({
      x: newIndex * slideWidth,
      animated: true
    });
  };
  var handleNext = function handleNext() {
    var _scrollViewRef$curren2;
    var newIndex = Math.min(bannerTiles.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    (_scrollViewRef$curren2 = scrollViewRef.current) === null || _scrollViewRef$curren2 === void 0 || _scrollViewRef$curren2.scrollTo({
      x: newIndex * slideWidth,
      animated: true
    });
  };
  var displayControls = bannerTiles.length > 1;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_molecules.SectionHeader, {
    title: section.title,
    description: section.description
  }), /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.carouselContainer
  }, displayControls && /*#__PURE__*/_react["default"].createElement(_TouchableOpacity["default"], {
    style: [styles.navButton, styles.navButtonLeft, {
      backgroundColor: theme.background
    }],
    onPress: handlePrev
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Icon, {
    name: "ArrowLeft",
    size: 20,
    color: theme.primary
  })), /*#__PURE__*/_react["default"].createElement(_ScrollView["default"], {
    ref: scrollViewRef,
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    onScroll: handleScroll,
    onMomentumScrollEnd: handleScrollEnd,
    scrollEventThrottle: 16,
    style: [styles.carouselContent, {
      width: slideWidth
    }],
    contentContainerStyle: {
      width: slideWidth * bannerTiles.length
    },
    decelerationRate: "fast",
    snapToInterval: slideWidth,
    snapToAlignment: "start"
  }, bannerTiles.map(function (tile, index) {
    var configuration = tile.configuration;
    return /*#__PURE__*/_react["default"].createElement(_View["default"], {
      key: index,
      style: [{
        width: slideWidth
      }]
    }, /*#__PURE__*/_react["default"].createElement(_organisms.BannerTile, {
      configuration: configuration
    }));
  })), displayControls && /*#__PURE__*/_react["default"].createElement(_TouchableOpacity["default"], {
    style: [styles.navButton, styles.navButtonRight, {
      backgroundColor: theme.surface
    }],
    onPress: handleNext
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Icon, {
    name: "ArrowRight",
    size: 20,
    color: theme.primary
  }))), displayControls && /*#__PURE__*/_react["default"].createElement(_View["default"], {
    style: styles.indicators
  }, bannerTiles.map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement(_View["default"], {
      key: index,
      style: [styles.indicator, {
        backgroundColor: theme.derivedBackground
      }, index === currentIndex && [styles.activeIndicator, {
        backgroundColor: theme.primary
      }]]
    });
  }))));
};
var buttonSize = 30;
var styles = _StyleSheet["default"].create({
  container: {
    width: "100%",
    maxWidth: 1080,
    alignSelf: "center",
    position: "relative"
  },
  sectionTitle: {
    fontSize: 31,
    marginBottom: 10
  },
  sectionDescription: {
    marginBottom: 21
  },
  title: {
    marginBottom: 10
  },
  description: {
    marginBottom: 20
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  carouselContent: {
    overflow: "hidden"
  },
  slide: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden"
  },
  slideContent: {
    padding: 20,
    flex: 1
  },
  imageContainer: {
    width: "20%",
    aspectRatio: 1,
    position: "relative",
    overflow: "hidden"
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  navButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    width: buttonSize,
    height: buttonSize,
    position: "absolute",
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  navButtonLeft: {
    left: -buttonSize / 2
  },
  navButtonRight: {
    right: -buttonSize / 2
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  },
  activeIndicator: {
    width: 30
  }
});
var _default = exports["default"] = Carousel;