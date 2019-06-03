'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @license
                                                                                                                                                           * Copyright &copy 2019 Kirana Bazaar
                                                                                                                                                           *
                                                                                                                                                           * @author Sai Kalyan Moguloju
                                                                                                                                                           */


var Address = function Address(address) {
  _classCallCheck(this, Address);

  this.id = address.id ? address.id : (0, _v2.default)();
  this.addressLine1 = address.addressLine1;
  this.addressLine2 = address.addressLine2;
  this.zip = address.zip;
  this.phoneNumber = address.phoneNumber;
  this.emailId = address.emailId;
  this.longitude = address.longitude;
  this.lattitude = address.lattitud;
};

exports.default = Address;