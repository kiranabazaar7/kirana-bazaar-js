"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

var CartItem = function CartItem(cartItem) {
  _classCallCheck(this, CartItem);

  this.itemId = cartItem.itemId;
  this.quantity = cartItem.quantity;
  this.timeInBuy = cartItem.timeInBuy ? cartItem.timeInBuy : 5;
};

exports.default = CartItem;