'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _reactBootstrap = require('react-bootstrap');

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraText = require('terra-text');

var _terraText2 = _interopRequireDefault(_terraText);

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

var _admin = require('../../images/admin.png');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright &copy 2019 Kirana Bazaar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Sai Kalyan Moguloju
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AdminLogin = function (_React$Component) {
  _inherits(AdminLogin, _React$Component);

  function AdminLogin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AdminLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AdminLogin.__proto__ || Object.getPrototypeOf(AdminLogin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      userName: '',
      password: ''
    }, _this.onLoginClick = function () {
      _this.props.onLoginClick(_this.state.userName, _this.state.password);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AdminLogin, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _terraSpacer2.default,
        { style: { backgroundColor: '#F0F0F0', height: '100%', paddingTop: '5rem' } },
        _react2.default.createElement(
          _reactBootstrap.Container,
          { style: { maxWidth: '30rem', backgroundColor: '#F0F0F0' } },
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              null,
              _react2.default.createElement(
                _reactBootstrap.Card,
                { style: { backgroundColor: '#D3D3D3' } },
                _react2.default.createElement(
                  _terraSpacer2.default,
                  { margin: 'medium' },
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      null,
                      _react2.default.createElement(_reactBootstrap.Card.Img, { variant: 'top', src: _admin2.default, style: { height: '5rem', width: '5rem' } })
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Card.Body,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Container,
                      null,
                      _react2.default.createElement(
                        _terraSpacer2.default,
                        { margin: 'small' },
                        _react2.default.createElement(
                          _reactBootstrap.Row,
                          null,
                          _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 4 },
                            _react2.default.createElement(
                              _terraText2.default,
                              null,
                              'Username'
                            )
                          ),
                          _react2.default.createElement(
                            _reactBootstrap.Col,
                            null,
                            _react2.default.createElement(_terraFormInput2.default, {
                              defaultValue: this.state.userName,
                              onChange: function onChange(event) {
                                _this2.setState({ userName: event.target.value });
                              },
                              placeholder: 'Enter Username'
                            })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _terraSpacer2.default,
                        { margin: 'small' },
                        _react2.default.createElement(
                          _reactBootstrap.Row,
                          null,
                          _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 4 },
                            _react2.default.createElement(
                              _terraText2.default,
                              null,
                              'Password'
                            )
                          ),
                          _react2.default.createElement(
                            _reactBootstrap.Col,
                            null,
                            _react2.default.createElement(_terraFormInput2.default, {
                              defaultValue: this.state.password,
                              type: 'password',
                              onChange: function onChange(event) {
                                _this2.setState({ password: event.target.value });
                              },
                              placeholder: 'Enter Password'
                            })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _terraSpacer2.default,
                        { marginTop: 'large+2' },
                        _react2.default.createElement(
                          _reactBootstrap.Row,
                          { style: { textAlign: 'center' } },
                          _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 12 },
                            _react2.default.createElement(
                              _reactBootstrap.Button,
                              { variant: 'dark', onClick: this.onLoginClick },
                              'Login'
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AdminLogin;
}(_react2.default.Component);

AdminLogin.propTypes = {
  onLoginClick: _proptypes2.default.func
};
AdminLogin.defaultProps = {
  onLoginClick: function onLoginClick() {}
};
exports.default = AdminLogin;