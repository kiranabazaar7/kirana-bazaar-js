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


var Item = function Item(item) {
  _classCallCheck(this, Item);

  this.id = item.id ? item.id : (0, _v2.default)();
  this.name = item.name;
  this.description = item.description;
  this.storeID = item.storeID;
  this.price = item.price ? item.price : 0;
  this.itemType = item.itemType;
  this.availableUnits = item.availableUnits ? item.availableUnits : 0;
  this.unitsSolds = item.unitsSolds ? item.unitsSolds : 0;
  this.unitsLocked = item.unitsLocked ? item.unitsLocked : 0;
};

exports.default = Item;