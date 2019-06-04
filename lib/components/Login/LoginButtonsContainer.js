'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _reactBootstrap = require('react-bootstrap');

var _SignUpLoginButton = require('../SignUpLoginButton/SignUpLoginButton');

var _SignUpLoginButton2 = _interopRequireDefault(_SignUpLoginButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

var LoginButtonsContainer = function LoginButtonsContainer(props) {
  return _react2.default.createElement(
    _reactBootstrap.Card,
    { style: { border: 0 } },
    _react2.default.createElement(
      _reactBootstrap.Card.Body,
      null,
      _react2.default.createElement(_SignUpLoginButton2.default, { text: 'Login as ' + (props.isRetailer ? 'retailer' : 'buyer') }),
      _react2.default.createElement(
        _reactBootstrap.Card.Text,
        null,
        props.isRetailer ? 'Publish your goods online' : 'Get your needs delivered to you'
      )
    )
  );
};

LoginButtonsContainer.propTypes = {
  isRetailer: _proptypes2.default.bool
};

LoginButtonsContainer.defaultProps = {
  isRetailer: false
};

exports.default = LoginButtonsContainer;