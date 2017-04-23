// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var calcMod = require( './calcMod' );

// globals
var total = 0;
var xNum = 0;
var yNum = 0;
var userInput;

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// server at 3000
app.listen( 3000, function(){
  console.log( 'server up on:', 3000 );
});

// POST
app.post( '/calc', function( req, res ){
  var data = req.body;
  res.status( 200 );
});

// GET
app.get( '/calc', function( req, res ){
  console.log( '/calc' );
});
