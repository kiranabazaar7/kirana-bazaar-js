'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoremComponent = require('react-lorem-component');

var _reactLoremComponent2 = _interopRequireDefault(_reactLoremComponent);

var _UserLanding = require('../Landing/UserLanding');

var _UserLanding2 = _interopRequireDefault(_UserLanding);

var _StoreHeader = require('./StoreHeader');

var _StoreHeader2 = _interopRequireDefault(_StoreHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreLanding = function StoreLanding() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_UserLanding2.default, null),
    _react2.default.createElement(_StoreHeader2.default, null),
    _react2.default.createElement(_reactLoremComponent2.default, { count: 50 })
  );
};

exports.default = StoreLanding;