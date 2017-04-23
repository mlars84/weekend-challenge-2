// client side will take in the values (in 2 input text fields) and the type of
// mathematical operation (selected using a button on the DOM).
// Convert the input fields for the two values to Buttons. So the experience
// would allow the user to click on a numerical button, then a mathematical
// operation, then a numerical button again. Then have an equal button that
// sends all of the information to the server.
// Finally, build a 'clear' button that resets the whole experience.



$(document).ready(onReady);
console.log('JQ');

var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var operators = ['+', '-', '*', '/', '='];
var result = '';

//function with event listeners that runs when doc loads
function onReady(){
  console.log('onReady');
  $('#clear').on('click', clearFunc);
  $('#plus').on('click', buttonFunc);
  $('#minus').on('click', buttonFunc);
  $('#times').on('click', buttonFunc);
  $('#divides').on('click', buttonFunc);
  $('#equals').on('click', buttonFunc);
  $('.numbers').on('click', buttonFunc);
} // end onReady


function buttonFunc() {
  console.log('buttonFunc');
}

function clearFunc() {
  $('#result').empty();
  result = '';
}
