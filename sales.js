'use strict';

var Product = require( './product' );

const VERTICALS = [
  'pain',
  'diet'
];

var sales = [];

class Sales {
  constructor() {
    this._createSales();
  }

  _createSales() {
    setTimeout( function() {
      var i = 0;
      var l = Math.floor( Math.random() * 5 );

      for ( ; i < l; i ++ )
        sales.push( new Product( { vertical: VERTICALS[ Math.floor( Math.random() * VERTICALS.length ) ] } ) )

      this._createSales();
    }.bind( this ), 10000 );
  }

  getSales() {
    return sales;
  }
}

module.exports = Sales;
