/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

class CartItem {
  constructor(cartItem) {
    this.itemId = cartItem.itemId;
    this.quantity = cartItem.quantity;
    this.timeInBuy = cartItem.timeInBuy ? cartItem.timeInBuy : 5;
  }
}

export default CartItem;
