'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _CartItem = require('./CartItem');

var _CartItem2 = _interopRequireDefault(_CartItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @license
                                                                                                                                                           * Copyright &copy 2019 Kirana Bazaar
                                                                                                                                                           *
                                                                                                                                                           * @author Sai Kalyan Moguloju
                                                                                                                                                           */


var Cart = function Cart(cart) {
  _classCallCheck(this, Cart);

  this.id = cart.id ? cart.id : (0, _v2.default)();
  this.userId = cart.userId;
  this.cartItems = cart.cartItems ? cart.cartItems.map(function (cartItem) {
    return new _CartItem2.default(cartItem);
  }) : [];
  this.saveForLater = cart.saveForLater || false;
};

exports.default = Cart;