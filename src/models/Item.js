/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */
import uuid from 'uuid/v4';

class Item {
  constructor(item) {
    this.id = item.id ? item.id : uuid();
    this.name = item.name;
    this.description = item.description;
    this.storeID = item.storeID;
    this.price = item.price ? item.price : 0;
    this.itemType = item.itemType;
    this.availableUnits = item.availableUnits ? item.availableUnits : 0;
    this.unitsSolds = item.unitsSolds ? item.unitsSolds : 0;
    this.unitsLocked = item.unitsLocked ? item.unitsLocked : 0;
  }
}

export default Item;
