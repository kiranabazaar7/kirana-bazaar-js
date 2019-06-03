/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */
import uuid from 'uuid/v4';
import Address from './Address';

class Store {
  constructor(store) {
    this.id = store.id ? store.id : uuid();
    this.name = store.name;
    this.address = new Address(store.address);
    this.retailerID = store.retailerID;
    this.isActive = store.isActive ? store.isActive : true;
  }
}

export default Store;
