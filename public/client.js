$( document ).ready( onReady );
console.log( 'JQ' );

//function with event listeners that runs when doc loads
function onReady(){
  console.log( 'onReady' );
  //operator buttons
  $( '#clear' ).on( 'click', clearFunc );
  $( '#plus' ).on( 'click', buttonFunc );
  $( '#minus' ).on( 'click', buttonFunc );
  $( '#times' ).on( 'click', buttonFunc );
  $( '#divides' ).on( 'click', buttonFunc );
  $( '#equals' ).on( 'click', equalsFunc );
  // number buttons
  $( '.numberButtons' ).on( 'click', buttonFunc );
} // end onReady

function equalsFunc(){
  console.log( 'equals' );
var objectToSend = {
  xNum: $( '#x' ).text(),
  yNum: $( '#y' ).text(),
  operator: $( '#operator' ).text()
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
      console.log('response');
    }
  });
} // end equalsFunc

function buttonFunc() {
  console.log( 'buttonFunc' );
  clearFunc();
  $( "#result" ).text();
  total += $( this ).text();
    $( '#result' ).text( total );
} // end buttonFunc

function clearFunc() {
  $( '#result' ).empty();
  total = '';
} // end clearFunc
