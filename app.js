'use strict';

var express = require( 'express' );
var config = require( './config' );
var Sales = require( './sales' );

// app
var app = module.exports = express();

// config
config( app );

var sales = new Sales();

// router
var router = express.Router();

router.all(
  '*',
  function( req, res, next ) {
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Headers', 'X-Requested-With' );
    next();
  }
);

router.get(
  '/api/sales',
  function( req, res ) {
    var _sales = sales.getSales();

    res.json( _sales.map( function( sale ) { return sale.data; } ) );
  }
);

router.get(
  '*',
  function( req, res ) {
    res.sendStatus( 200 );
  }
);

app.use( router );
app.listen( process.env.PORT || 1337, function () {
  console.log( app.get( 'title' ) + ':listening:' + ( process.env.PORT || 1337 ) );
});
