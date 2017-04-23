// client side will take in the values and the type of
// mathematical operation (selected using a button on the DOM).
// Convert the input fields for the two values to Buttons. So the experience
// would allow the user to click on a numerical button, then a mathematical
// operation, then a numerical button again. Then have an equal button that
// sends all of the information to the server.
// Finally, build a 'clear' button that resets the whole experience.

$( document ).ready( onReady );
console.log( 'JQ' );

var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var operators = ['+', '-', '*', '/', '='];
var total = '';

//function with event listeners that runs when doc loads
function onReady(){
  console.log( 'onReady' );
  //operator buttons
  $( '#clear' ).on( 'click', clearFunc );
  $( '#plus' ).on( 'click', buttonFunc );
  $( '#minus' ).on( 'click', buttonFunc );
  $( '#times' ).on( 'click', buttonFunc );
  $( '#divides' ).on( 'click', buttonFunc );
  $( '#equals' ).on( 'click', equals );
  // number buttons
  $('#seven').on('click', buttonFunc);
  $('#eight').on('click', buttonFunc);
  $('#nine').on('click', buttonFunc);
  $('#four').on('click', buttonFunc);
  $('#five').on('click', buttonFunc);
  $('#six').on('click', buttonFunc);
  $('#one').on('click', buttonFunc);
  $('#two').on('click', buttonFunc);
  $('#three').on('click', buttonFunc);
  $('#zero').on('click', buttonFunc);

} // end onReady

function equals(){
  console.log( 'equals' );

  var xNum = '';
  var yNum = '';

  var objectToSend = {
    x: xNum,
    y: yNum,
    // operators:
  };

  // ajax's
  $.ajax({
    url: '/calc',
    method: 'POST',
    data: objectToSend,
    success: function( response ){
      console.log( response );
    }
  });

  $.ajax({
    url: '/calc',
    method: 'GET',
    success: function( response ){
    }
  });
} // end equals

function buttonFunc() {
  console.log( 'buttonFunc' );
  clearFunc();
  $( "#result" ).text();
  total += $( this ).text();
    $( '#result' ).text( total );
}

function clearFunc() {
  $( '#result' ).empty();
  total = '';
}
