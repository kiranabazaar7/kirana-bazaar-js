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


var Store = function Store(store) {
  _classCallCheck(this, Store);

  this.id = store.id ? store.id : (0, _v2.default)();
  this.name = store.name;
  this.address = new _Address2.default(store.address);
  this.retailerID = store.retailerID;
  this.isActive = store.isActive ? store.isActive : true;
};

exports.default = Store;