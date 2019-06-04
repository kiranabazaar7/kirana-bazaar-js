'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _reactBootstrap = require('react-bootstrap');

var _fa = require('react-icons/fa');

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

var SignUpLoginButton = function SignUpLoginButton(props) {
  return _react2.default.createElement(
    _reactBootstrap.Button,
    { variant: 'light' },
    _react2.default.createElement(
      _terraSpacer2.default,
      { margin: 'medium' },
      _react2.default.createElement(_terraArrange2.default, {
        style: { color: 'grey' },
        fill: _react2.default.createElement(
          'h1',
          null,
          props.text
        ),
        fitEnd: _react2.default.createElement(_fa.FaCaretRight, { style: { fontSize: '2em' } }),
        alignFitEnd: 'center'
      })
    )
  );
};

SignUpLoginButton.propTypes = {
  text: _proptypes2.default.string.isRequired
};

exports.default = SignUpLoginButton;