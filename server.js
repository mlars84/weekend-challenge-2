// The logic for the calculator needs to be housed on the Server, where the
// client side will take in the values (in 2 input text fields) and the type of
// mathematical operation (selected using a button on the DOM).

var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

//globals
var total = 0;

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// server at 3000
app.listen( 3000, function(){
  console.log( 'server up on:', 3000 );
});
