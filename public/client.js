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
} // end onReady

function buttonFunc() {

}

function clearFunc() {
  $('#result').empty();
  total = '';
}
