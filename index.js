"use strict";
'use client';

/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
var _excluded = ["options", "events", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var owlCarouselOptions = {
  core: ['items', 'loop', 'center', 'rewind', 'mouseDrag', 'touchDrag', 'pullDrag', 'freeDrag', 'margin', 'stagePadding', 'merge', 'mergeFit', 'autoWidth', 'startPosition', 'rtl', 'smartSpeed', 'fluidSpeed', 'dragEndSpeed', 'responsive', 'responsiveRefreshRate', 'responsiveBaseElement', 'fallbackEasing', 'info', 'nestedItemSelector', 'itemElement', 'stageElement', 'refreshClass', 'loadedClass', 'loadingClass', 'rtlClass', 'responsiveClass', 'dragClass', 'itemClass', 'stageClass', 'stageOuterClass', 'grabClass'],
  autorefresh: ['autoRefresh', 'autoRefreshInterval'],
  lazy: ['lazyLoad'],
  autoHeight: ['autoHeight', 'autoHeightClass'],
  video: ['video', 'videoHeight', 'videoWidth'],
  animate: ['animateOut', 'animateIn'],
  autoplay: ['autoplay', 'autoplayTimeout', 'autoplayHoverPause', 'autoplaySpeed'],
  navigation: ['nav', 'navText', 'navSpeed', 'navElement', 'navContainer', 'navContainerClass', 'navClass', 'slideBy', 'dotClass', 'dotsClass', 'dots', 'dotsEach', 'dotsData', 'dotsSpeed', 'dotsContainer'],
  hash: ['URLhashListener']
};
var owlCarouselEvents = {
  core: ['onInitialize', 'onInitialized', 'onResize', 'onResized', 'onRefresh', 'onRefreshed', 'onDrag', 'onDragged', 'onTranslate', 'onTranslated', 'onChange', 'onChanged'],
  lazy: ['onLoadLazy', 'onLoadedLazy'],
  video: ['onStopVideo', 'onPlayVideo']
};
var OwlCarousel = /*#__PURE__*/function (_React$Component) {
  function OwlCarousel(props) {
    var _this;
    _classCallCheck(this, OwlCarousel);
    _this = _callSuper(this, OwlCarousel, [props]);
    _defineProperty(_this, "onTranslate", function (next) {
      return function (event) {
        _this.currentPosition = event.item.index;
        if (next) next(event);
      };
    });
    _this.next = function () {
      return _this.$car.next();
    };
    _this.prev = function () {
      return _this.$car.prev();
    };
    _this.goTo = function (x) {
      return _this.$car.to(x);
    };
    _this.currentPosition = 0;
    _this.onTranslate = _this.onTranslate.bind(_this);
    return _this;
  }
  _inherits(OwlCarousel, _React$Component);
  return _createClass(OwlCarousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      require('./owl.carousel.js');
      var options = this.getOptions();
      this.init(options);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.destroy();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var options = this.getOptions();
      options.startPosition = this.currentPosition;
      this.init(options);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
    }
  }, {
    key: "init",
    value: function init(options) {
      var _this$$node;
      var next = options.onTranslate;
      options.onTranslate = this.onTranslate(next);
      (_this$$node = this.$node) === null || _this$$node === void 0 || _this$$node.owlCarousel(options);
      this.$car = this.$node.data('owl.carousel');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$car.destroy();
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this2 = this;
      var options = {};
      var carOptions = Object.values(owlCarouselOptions).reduce(function (a, v) {
        return a.concat(v);
      }, []);
      carOptions.forEach(function (val) {
        if (val in _this2.props.options) options[val] = _this2.props.options[val];
      });
      var carEvents = Object.values(owlCarouselEvents).reduce(function (a, v) {
        return a.concat(v);
      }, []);
      carEvents.forEach(function (val) {
        if (_this2.props.events) {
          if (val in _this2.props.events) options[val] = _this2.props.events[val];
        }
      });
      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        options = _this$props.options,
        events = _this$props.events,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: function ref(item) {
          return _this3.$node = $((0, _reactDom.findDOMNode)(item));
        },
        className: "owl-carousel owl-theme"
      }, props), children);
    }
  }]);
}(_react["default"].Component);
OwlCarousel.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element.isRequired)]).isRequired,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  options: _propTypes["default"].shape({
    items: _propTypes["default"].number,
    loop: _propTypes["default"].bool,
    center: _propTypes["default"].bool,
    rewind: _propTypes["default"].bool,
    mouseDrag: _propTypes["default"].bool,
    touchDrag: _propTypes["default"].bool,
    pullDrag: _propTypes["default"].bool,
    freeDrag: _propTypes["default"].bool,
    margin: _propTypes["default"].number,
    stagePadding: _propTypes["default"].number,
    merge: _propTypes["default"].bool,
    mergeFit: _propTypes["default"].bool,
    autoWidth: _propTypes["default"].bool,
    startPosition: _propTypes["default"].number,
    rtl: _propTypes["default"].bool,
    smartSpeed: _propTypes["default"].number,
    fluidSpeed: _propTypes["default"].bool,
    dragEndSpeed: _propTypes["default"].bool,
    responsive: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]),
    responsiveRefreshRate: _propTypes["default"].number,
    responsiveBaseElement: _propTypes["default"].object,
    fallbackEasing: _propTypes["default"].string,
    info: _propTypes["default"].bool,
    nestedItemSelector: _propTypes["default"].bool,
    itemElement: _propTypes["default"].string,
    stageElement: _propTypes["default"].string,
    refreshClass: _propTypes["default"].string,
    loadedClass: _propTypes["default"].string,
    loadingClass: _propTypes["default"].string,
    rtlClass: _propTypes["default"].string,
    responsiveClass: _propTypes["default"].any,
    dragClass: _propTypes["default"].string,
    itemClass: _propTypes["default"].string,
    stageClass: _propTypes["default"].string,
    stageOuterClass: _propTypes["default"].string,
    grabClass: _propTypes["default"].string,
    // autoRefresh
    autoRefresh: _propTypes["default"].bool,
    autoRefreshInterval: _propTypes["default"].number,
    // lazy
    lazyLoad: _propTypes["default"].bool,
    // autoHeight
    autoHeight: _propTypes["default"].bool,
    autoHeightClass: _propTypes["default"].string,
    // video
    video: _propTypes["default"].bool,
    videoHeight: _propTypes["default"].bool,
    videoWidth: _propTypes["default"].bool,
    // animate
    animateOut: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
    animateIn: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
    // autoplay
    autoplay: _propTypes["default"].bool,
    autoplayTimeout: _propTypes["default"].number,
    autoplayHoverPause: _propTypes["default"].bool,
    autoplaySpeed: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
    // navigation
    nav: _propTypes["default"].bool,
    navText: _propTypes["default"].array,
    navSpeed: _propTypes["default"].bool,
    navElement: _propTypes["default"].string,
    navContainer: _propTypes["default"].bool,
    navContainerClass: _propTypes["default"].string,
    navClass: _propTypes["default"].array,
    slideBy: _propTypes["default"].number,
    dotClass: _propTypes["default"].string,
    dotsClass: _propTypes["default"].string,
    dots: _propTypes["default"].bool,
    dotsEach: _propTypes["default"].bool,
    dotsData: _propTypes["default"].bool,
    dotsSpeed: _propTypes["default"].bool,
    dotsContainer: _propTypes["default"].bool,
    // hash
    URLhashListener: _propTypes["default"].bool
  }),
  events: _propTypes["default"].shape({
    // core
    onInitialize: _propTypes["default"].func,
    onInitialized: _propTypes["default"].func,
    onResize: _propTypes["default"].func,
    onResized: _propTypes["default"].func,
    onRefresh: _propTypes["default"].func,
    onRefreshed: _propTypes["default"].func,
    onDrag: _propTypes["default"].func,
    onDragged: _propTypes["default"].func,
    onTranslate: _propTypes["default"].func,
    onTranslated: _propTypes["default"].func,
    onChange: _propTypes["default"].func,
    onChanged: _propTypes["default"].func,
    // lazy
    onLoadLazy: _propTypes["default"].func,
    onLoadedLazy: _propTypes["default"].func,
    // video
    onStopVideo: _propTypes["default"].func,
    onPlayVideo: _propTypes["default"].func
  })
};
OwlCarousel.defaultProps = {
  options: {},
  events: {}
};
var _default = exports["default"] = OwlCarousel;
