'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _UserLanding = require('./Landing/UserLanding');

var _UserLanding2 = _interopRequireDefault(_UserLanding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KiranaBazaarApplication = function KiranaBazaarApplication(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('link', {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
      integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T',
      crossOrigin: 'anonymous'
    }),
    props.isUserPage && _react2.default.createElement(_UserLanding2.default, null)
  );
}; /**
    * @license
    * Copyright &copy 2019 Kirana Bazaar
    *
    * @author Sai Kalyan Moguloju
    */

KiranaBazaarApplication.propTypes = {
  isUserPage: _proptypes2.default.bool.isRequired
};

exports.default = KiranaBazaarApplication;