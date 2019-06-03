/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */
import uuid from 'uuid/v4';
import Address from './Address';

class User {
  constructor(user) {
    this.id = user.id ? user.id : uuid();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.userName = user.userName;
    this.password = user.password;
    this.address = new Address(user.address);
    this.isActive = user.isActive ? user.isActive : true;
  }
}

export default User;
