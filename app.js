'use strict';

var express = require( 'express' );
var config = require( './config' );

// app
var app = module.exports = express();

// config
config( app );

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
  '/api/verticals',
  function( req, res ) {
    var json = { sales: [] };
    var i = 0;
    var l = Math.floor( Math.random() * 10 );

    for ( ; i < l; i ++ ) {}

    res.json( json );
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
