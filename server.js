// The logic for the calculator needs to be housed on the Server
// Once the server receives it, build out logic to compute the numbers in 1 of 4
// different ways. The server should be able to handle Addition, Subtraction,
// Multiplication, and Division. Once the calculation is complete, it should be
// sent back down to the client side app where it should be displayed on the DOM.

var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

//globals


// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// server at 3000
app.listen( 3000, function(){
  console.log( 'server up on:', 3000 );
});
