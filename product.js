'use strict';

var uuidV4 = require('uuid/v4');

const PRODUCTS = {
  'pain': { vertical: 'pain', name: 'Vitaproxin' },
  'diet': { vertical: 'diet', name: 'Contrave' }
};

class Product {
  constructor( opts ) {
    var product = PRODUCTS[ opts.vertical ];
    this.data = {
      uuid: uuidV4(),
      name: product.name,
      vertical: product.vertical,
      price: Math.floor( Math.random() * 100 )
    };
  }
}

module.exports = Product;
