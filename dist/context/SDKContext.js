"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSDK = exports.SDKProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var SDKContext = /*#__PURE__*/(0, _react.createContext)(null);
var SDKProvider = exports.SDKProvider = function SDKProvider(_ref) {
  var config = _ref.config,
    children = _ref.children;
  // Mocked API calls
  var makeRequest = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
      var options,
        proxyEndpoint,
        baseUrl,
        apiKey,
        url,
        headers,
        response,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            proxyEndpoint = config.proxyEndpoint, baseUrl = config.baseUrl, apiKey = config.apiKey;
            url = "".concat(proxyEndpoint || baseUrl).concat(endpoint);
            headers = new Headers(options.headers);
            if (apiKey) headers.set("X-Api-Key", apiKey);
            _context.next = 7;
            return fetch(url, _objectSpread(_objectSpread({}, options), {}, {
              headers: headers
            }));
          case 7:
            response = _context.sent;
            if (response.ok) {
              _context.next = 10;
              break;
            }
            throw new Error("HTTP error! status: ".concat(response.status));
          case 10:
            return _context.abrupt("return", response.json());
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function makeRequest(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getSectionByID = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", {
              status: "success",
              data: {
                type: "GRID",
                tiles: [{
                  tileHeight: "FULL",
                  active: true,
                  type: "REWARD_CATEGORY",
                  configuration: {
                    rewardCategoryId: "e946921f-cd35-4163-bfad-43057e097ac9",
                    allowDecorationOverlay: true,
                    rewardCategory: {
                      name: "Sports",
                      priority: 0,
                      type: "REWARD",
                      id: "e946921f-cd35-4163-bfad-43057e097ac9",
                      createdAt: "2024-08-20T08:46:43.803Z",
                      updatedAt: "2024-08-20T08:46:43.803Z",
                      description: null,
                      metadata: null,
                      pictureUrl: "https://picsum.photos/200/300",
                      rewards: [{
                        id: "e785dff1-5d66-41d6-95eb-9369279e8abf",
                        createdAt: "2024-08-20T08:46:43.810Z",
                        updatedAt: "2024-08-20T08:46:43.810Z",
                        name: "Intelligent Metal Pants",
                        pictureUrl: "https://picsum.photos/200/300",
                        price: 19,
                        priority: 0,
                        availability: {
                          start: "2024-08-20T08:46:43.798Z",
                          end: "2025-01-31T13:56:28.366Z"
                        },
                        purchasable: true,
                        tier: null,
                        summary: null,
                        redemptionMessage: null,
                        visibilityCriteria: null
                      }],
                      parent: null
                    }
                  },
                  id: "f12410a4-d280-4dfc-8204-ff9eef32aae1",
                  createdAt: "2024-08-15T13:32:36.819Z",
                  updatedAt: "2024-08-15T13:32:36.819Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "HALF",
                  active: true,
                  type: "TIER",
                  configuration: {
                    type: "SPECIFIC",
                    tierId: "83642bc2-78cb-4d7e-ade3-e0f28f09e90f",
                    tier: {
                      id: "83642bc2-78cb-4d7e-ade3-e0f28f09e90f",
                      name: "Gold",
                      description: null,
                      artworkUrl: null,
                      pointsRequirement: 10,
                      earnedPoints: 100,
                      attained: false
                    }
                  },
                  id: "ee15fee1-f3b7-46fb-b2fd-71db3a1c7ee1",
                  createdAt: "2024-08-21T07:24:23.003Z",
                  updatedAt: "2024-08-21T07:24:23.003Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "FULL",
                  active: true,
                  type: "TIER",
                  configuration: {
                    type: "NEXT",
                    tier: {
                      id: "cab44129-ccb4-4d3c-94f1-57aff3183bf3",
                      name: "Emerald",
                      description: null,
                      artworkUrl: null,
                      pointsRequirement: 500,
                      earnedPoints: 100,
                      attained: false
                    }
                  },
                  id: "ffd24e5f-1557-4100-b19a-837bfa8da460",
                  createdAt: "2024-08-15T13:03:42.763Z",
                  updatedAt: "2024-08-15T13:03:42.763Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "HALF",
                  active: true,
                  type: "CONTENT",
                  configuration: {
                    title: "Welcome Nick! ",
                    imageUrl: null,
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  },
                  id: "863df8df-0182-428b-bb35-d5117050b860",
                  createdAt: "2024-08-21T15:16:02.804Z",
                  updatedAt: "2024-08-21T15:16:02.804Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "HALF",
                  active: true,
                  type: "CONTENT",
                  configuration: {
                    title: "Test Content Title",
                    imageUrl: "https://picsum.photos/200/300",
                    subtitle: "Test content subtitle"
                  },
                  id: "f563f4ac-6f79-4b59-b0e9-1b6ae25b1a94",
                  createdAt: "2024-08-22T08:28:51.065Z",
                  updatedAt: "2024-08-22T08:28:51.065Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "FULL",
                  active: true,
                  type: "TIER",
                  configuration: {
                    type: "CURRENT",
                    tier: {
                      id: "83642bc2-78cb-4d7e-ade3-e0f28f09e90f",
                      name: "Gold",
                      description: null,
                      artworkUrl: null,
                      pointsRequirement: 10,
                      earnedPoints: 100,
                      attained: false
                    }
                  },
                  id: "02a7e6a6-7d47-4c52-8dbf-80f0f1a68a42",
                  createdAt: "2024-08-15T13:03:27.127Z",
                  updatedAt: "2024-08-15T13:03:27.127Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "FULL",
                  active: true,
                  type: "REWARD_CATEGORY",
                  configuration: {
                    rewardCategoryId: "b8cd84ee-ff9e-4244-b4d9-91436e6a6e80",
                    allowDecorationOverlay: true,
                    rewardCategory: {
                      name: "Sports",
                      priority: 0,
                      type: "REWARD",
                      id: "e946921f-cd35-4163-bfad-43057e097ac9",
                      createdAt: "2024-08-20T08:46:43.803Z",
                      updatedAt: "2024-08-20T08:46:43.803Z",
                      description: null,
                      metadata: null,
                      pictureUrl: "https://picsum.photos/200/300",
                      rewards: [{
                        id: "e785dff1-5d66-41d6-95eb-9369279e8abf",
                        createdAt: "2024-08-20T08:46:43.810Z",
                        updatedAt: "2024-08-20T08:46:43.810Z",
                        name: "Intelligent Metal Pants",
                        pictureUrl: "https://picsum.photos/200/300",
                        price: 19,
                        priority: 0,
                        availability: {
                          start: "2024-08-20T08:46:43.798Z",
                          end: "2025-01-31T13:56:28.366Z"
                        },
                        purchasable: true,
                        tier: null,
                        summary: null,
                        redemptionMessage: null,
                        visibilityCriteria: null
                      }],
                      parent: null
                    }
                  },
                  id: "0d2c9333-b235-4194-9102-2560c4e0ea62",
                  createdAt: "2024-08-15T13:06:36.022Z",
                  updatedAt: "2024-08-15T13:27:12.434Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "FULL",
                  active: true,
                  type: "REWARD_CATEGORY",
                  configuration: {
                    rewardCategoryId: "a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d",
                    allowDecorationOverlay: false,
                    rewardCategory: {
                      name: "Sports",
                      priority: 0,
                      type: "REWARD",
                      id: "e946921f-cd35-4163-bfad-43057e097ac9",
                      createdAt: "2024-08-20T08:46:43.803Z",
                      updatedAt: "2024-08-20T08:46:43.803Z",
                      description: null,
                      metadata: null,
                      pictureUrl: "https://picsum.photos/200/300",
                      rewards: [{
                        id: "e785dff1-5d66-41d6-95eb-9369279e8abf",
                        createdAt: "2024-08-20T08:46:43.810Z",
                        updatedAt: "2024-08-20T08:46:43.810Z",
                        name: "Intelligent Metal Pants",
                        pictureUrl: "https://picsum.photos/200/300",
                        price: 19,
                        priority: 0,
                        availability: {
                          start: "2024-08-20T08:46:43.798Z",
                          end: "2025-01-31T13:56:28.366Z"
                        },
                        purchasable: true,
                        tier: null,
                        summary: null,
                        redemptionMessage: null,
                        visibilityCriteria: null
                      }],
                      parent: null
                    }
                  },
                  id: "a5889c18-8adb-43f3-a093-12a8a14930b3",
                  createdAt: "2024-08-15T13:06:14.583Z",
                  updatedAt: "2024-08-15T13:06:14.583Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "FULL",
                  active: true,
                  type: "BADGE",
                  configuration: {
                    badgeId: "a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d",
                    badge: {
                      id: "a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d",
                      name: "Top Shopper",
                      description: "You’ve earned the Top Shopper badge 2 times! Last awarded on 1 Jan 2024.",
                      artworkUrl: "https://picsum.photos/200/300",
                      createdAt: "2024-08-15T13:06:14.583Z",
                      updatedAt: "2024-08-15T13:06:14.583Z"
                    }
                  },
                  id: "a5889c18-8adb-43f3-a093-12a8a14930b3",
                  createdAt: "2024-08-15T13:06:14.583Z",
                  updatedAt: "2024-08-15T13:06:14.583Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "HALF",
                  active: true,
                  type: "TIER",
                  configuration: {
                    type: "CURRENT",
                    tier: {
                      id: "83642bc2-78cb-4d7e-ade3-e0f28f09e90f",
                      name: "Gold",
                      description: null,
                      artworkUrl: null,
                      pointsRequirement: 10,
                      earnedPoints: 100,
                      attained: false
                    }
                  },
                  id: "030c9640-5fd3-438e-a52a-56fa36e63f25",
                  createdAt: "2024-08-21T07:41:24.883Z",
                  updatedAt: "2024-08-21T07:41:24.883Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "HALF",
                  active: true,
                  type: "TIER",
                  configuration: {
                    type: "NEXT",
                    tier: {
                      id: "cab44129-ccb4-4d3c-94f1-57aff3183bf3",
                      name: "Emerald",
                      description: null,
                      artworkUrl: null,
                      pointsRequirement: 500,
                      earnedPoints: 100,
                      attained: false
                    }
                  },
                  id: "34d2a663-7495-4da5-8d8e-9772f79d3c49",
                  createdAt: "2024-08-21T10:18:02.305Z",
                  updatedAt: "2024-08-21T10:18:02.305Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "HALF",
                  active: true,
                  type: "POINTS",
                  configuration: {
                    title: "Points",
                    imageUrl: "https://picsum.photos/200/200",
                    multiplier: null,
                    points: 100,
                    prefix: null,
                    suffix: null
                  },
                  id: "405a6844-f472-4d9e-84b9-20fb55dbd399",
                  createdAt: "2024-08-20T12:59:33.670Z",
                  updatedAt: "2024-08-20T12:59:33.670Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "FULL",
                  active: true,
                  type: "TIER",
                  configuration: {
                    type: "SPECIFIC",
                    tierId: "83642bc2-78cb-4d7e-ade3-e0f28f09e90f",
                    tier: {
                      id: "83642bc2-78cb-4d7e-ade3-e0f28f09e90f",
                      name: "Gold",
                      description: null,
                      artworkUrl: null,
                      pointsRequirement: 10,
                      earnedPoints: 100,
                      attained: false
                    }
                  },
                  id: "42d99d45-ab97-47bd-a7da-fdbaec4054d9",
                  createdAt: "2024-08-15T13:04:01.941Z",
                  updatedAt: "2024-08-15T13:04:01.941Z",
                  visibilityCriteria: null
                }, {
                  tileHeight: "HALF",
                  active: true,
                  type: "REWARD",
                  configuration: {
                    rewardId: "02fdea07-e3eb-4a2d-a66a-cb0368427bd2",
                    showPrice: false,
                    reward: {
                      id: "02fdea07-e3eb-4a2d-a66a-cb0368427bd2",
                      createdAt: "2024-08-20T08:46:43.851Z",
                      updatedAt: "2024-08-20T08:46:43.851Z",
                      name: "Incredible Granite Soap",
                      description: "Ut quidem nostrum atque.",
                      pictureUrl: "https://picsum.photos/200/300",
                      value: 0,
                      price: 61,
                      priority: 0,
                      availability: {
                        start: "2024-08-20T08:46:43.848Z",
                        end: "2024-09-14T03:04:54.056Z"
                      },
                      purchasable: true,
                      terms: "",
                      tier: null,
                      venues: [],
                      category: null,
                      discounts: [],
                      summary: null,
                      redemptionChannels: ["IN_STORE", "ONLINE"],
                      purchasableForAudiences: [],
                      logoUrl: null,
                      redemptionMessage: null,
                      visibilityCriteria: null,
                      type: "VOUCHER",
                      codeType: "HUMAN",
                      code: null,
                      purchaseExpiration: null,
                      hideCode: false,
                      notificationConfig: null
                    }
                  },
                  id: "511b2a95-5094-4a01-b958-05643f813822",
                  createdAt: "2024-08-20T13:05:16.974Z",
                  updatedAt: "2024-08-20T13:05:16.974Z",
                  visibilityCriteria: null
                }],
                priority: 1,
                active: true,
                pointsMultiplier: 100,
                id: "47c72773-11c6-41b0-988d-fcc74f58181f",
                createdAt: "2024-08-15T13:38:20.852Z",
                updatedAt: "2024-08-15T13:38:20.852Z",
                title: "Example Section",
                description: "This is an example description",
                pointsPrefix: null,
                pointsSuffix: "pts"
              }
            });
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getSectionByID(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getTileByID = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", {
              status: "success",
              data: {
                tileHeight: "FULL",
                active: true,
                type: "TIER",
                configuration: {
                  type: "NEXT",
                  tier: {
                    id: "cab44129-ccb4-4d3c-94f1-57aff3183bf3",
                    name: "Emerald",
                    description: null,
                    artworkUrl: null,
                    pointsRequirement: 500,
                    earnedPoints: 100,
                    attained: false
                  }
                },
                id: "ffd24e5f-1557-4100-b19a-837bfa8da460",
                createdAt: "2024-08-15T13:03:42.763Z",
                updatedAt: "2024-08-15T13:03:42.763Z",
                visibilityCriteria: null
              }
            });
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getTileByID(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var value = {
    getSectionByID: getSectionByID,
    getTileByID: getTileByID
  };
  return /*#__PURE__*/_react["default"].createElement(SDKContext.Provider, {
    value: value
  }, children);
};
var useSDK = exports.useSDK = function useSDK() {
  var context = (0, _react.useContext)(SDKContext);
  if (!context) {
    throw new Error("useSDK must be used within an SDKProvider");
  }
  return context;
};