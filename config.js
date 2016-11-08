'use strict';

var express = require( 'express' );
var morgan = require( 'morgan' );
var cookieParser = require( 'cookie-parser' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );
var compression = require( 'compression' );

module.exports = function( app ) {
  app.set( 'title', 'verticals_api' );
  app.use( morgan( 'tiny' ) );
  app.use( cookieParser() );
  app.use( methodOverride() );
  app.use( bodyParser.json() );
  app.use( compression() );
};
