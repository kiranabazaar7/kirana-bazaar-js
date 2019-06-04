'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _Address = require('./Address');

var _Address2 = _interopRequireDefault(_Address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @license
                                                                                                                                                           * Copyright &copy 2019 Kirana Bazaar
                                                                                                                                                           *
                                                                                                                                                           * @author Sai Kalyan Moguloju
                                                                                                                                                           */


var User = function User(user) {
  _classCallCheck(this, User);

  this.id = user.id ? user.id : (0, _v2.default)();
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.userName = user.userName;
  this.password = user.password;
  this.address = new _Address2.default(user.address);
  this.isActive = user.isActive ? user.isActive : true;
};

exports.default = User;