'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _SignUpButtonsContainer = require('./SignUpButtonsContainer');

var _SignUpButtonsContainer2 = _interopRequireDefault(_SignUpButtonsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUpLanding = function SignUpLanding() {
  return _react2.default.createElement(
    _reactBootstrap.Container,
    null,
    _react2.default.createElement(
      _reactBootstrap.Row,
      null,
      _react2.default.createElement(
        _reactBootstrap.Col,
        null,
        _react2.default.createElement(_SignUpButtonsContainer2.default, { isRetailer: true })
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        null,
        _react2.default.createElement(_SignUpButtonsContainer2.default, null)
      )
    )
  );
}; /**
    * @license
    * Copyright &copy 2019 Kirana Bazaar
    *
    * @author Sai Kalyan Moguloju
    */

exports.default = SignUpLanding;