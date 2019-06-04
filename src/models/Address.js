/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */
import uuid from 'uuid/v4';

class Address {
  constructor(address) {
    this.id = address.id ? address.id : uuid();
    this.addressLine1 = address.addressLine1;
    this.addressLine2 = address.addressLine2;
    this.zip = address.zip;
    this.phoneNumber = address.phoneNumber;
    this.emailId = address.emailId;
    this.longitude = address.longitude;
    this.lattitude = address.lattitud;
  }
}

export default Address;
