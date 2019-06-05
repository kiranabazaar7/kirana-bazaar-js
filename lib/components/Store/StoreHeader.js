'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _terraText = require('terra-text');

var _terraText2 = _interopRequireDefault(_terraText);

var _terraHeading = require('terra-heading');

var _terraHeading2 = _interopRequireDefault(_terraHeading);

var _reactBootstrap = require('react-bootstrap');

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraSearchField = require('terra-search-field');

var _terraSearchField2 = _interopRequireDefault(_terraSearchField);

var _StoreHeader = require('./StoreHeader.scss');

var _StoreHeader2 = _interopRequireDefault(_StoreHeader);

var _rfLogo = require('../../images/rf-logo.png');

var _rfLogo2 = _interopRequireDefault(_rfLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright &copy 2019 Kirana Bazaar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Sai Kalyan Moguloju
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var cx = _bind2.default.bind(_StoreHeader2.default);

var StoreHeader = function (_React$Component) {
  _inherits(StoreHeader, _React$Component);

  function StoreHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StoreHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StoreHeader.__proto__ || Object.getPrototypeOf(StoreHeader)).call.apply(_ref, [this].concat(args))), _this), _this.resizeHeaderOnScroll = function () {
      // Required for animation
      // const container = document.querySelector('[data-store-heading]');
      // this.setState({ visible: container.offsetTop !== event.target.scrollTop });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StoreHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.resizeHeaderOnScroll, true);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _terraSpacer2.default,
        { 'data-store-heading': true, className: cx('header-container'), paddingTop: 'large+2', paddingBottom: 'large+2' },
        _react2.default.createElement(
          _reactBootstrap.Container,
          { style: { maxWidth: '80rem' } },
          _react2.default.createElement(_terraArrange2.default, {
            className: cx('header-container'),
            alignFitStart: 'center',
            fitStart: _react2.default.createElement(_terraImage2.default, { src: _rfLogo2.default, alt: 'default image', className: cx('header-image'), variant: 'rounded' }),
            fill: _react2.default.createElement(
              _terraSpacer2.default,
              { paddingLeft: 'large+3' },
              _react2.default.createElement(
                _terraGrid2.default,
                null,
                _react2.default.createElement(
                  _terraGrid2.default.Row,
                  null,
                  _react2.default.createElement(
                    _terraGrid2.default.Column,
                    null,
                    _react2.default.createElement(
                      _terraHeading2.default,
                      { level: 3, size: 'large', weight: 400, className: cx('header-title') },
                      'Reliance Fresh'
                    ),
                    _react2.default.createElement(
                      _terraText2.default,
                      { weight: 400, className: cx('header-location') },
                      'Regimental Bazaar, Begumpet'
                    ),
                    _react2.default.createElement(
                      _terraSpacer2.default,
                      null,
                      _react2.default.createElement(_terraSearchField2.default, { className: cx('header-search'), placeholder: 'Search the Item' })
                    )
                  )
                )
              )
            )
          })
        )
      );
    }
  }]);

  return StoreHeader;
}(_react2.default.Component);

exports.default = StoreHeader;