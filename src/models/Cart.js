/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */
import uuid from 'uuid/v4';
import CartItem from './CartItem';

class Cart {
  constructor(cart) {
    this.id = cart.id ? cart.id : uuid();
    this.userId = cart.userId;
    this.cartItems = cart.cartItems ? cart.cartItems.map((cartItem) => new CartItem(cartItem)) : [];
    this.saveForLater = cart.saveForLater || false;
  }
}

export default Cart;
