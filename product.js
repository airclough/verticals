'use strict';

const PRODUCTS = {
  'pain': { vertical: 'pain', name: 'Vitaproxin' },
  'diet': { vertical: 'diet', name: 'Contrave' }
};

class Product {
  constructor( opts ) {
    var product = PRODUCTS[ opts.vertical ];
    this.data = {
      name: product.name,
      vertical: product.vertical,
      price: Math.floor( Math.random() * 100 )
    };
  }
}

return Product;
