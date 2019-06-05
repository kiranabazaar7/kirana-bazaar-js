'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StoreLanding = require('../../components/Store/StoreLanding');

var _StoreLanding2 = _interopRequireDefault(_StoreLanding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

var StoreHeaderTest = function StoreHeaderTest() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('link', {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
      integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T',
      crossOrigin: 'anonymous'
    }),
    _react2.default.createElement(_StoreLanding2.default, null)
  );
};

exports.default = StoreHeaderTest;