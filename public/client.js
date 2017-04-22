$(document).ready(onReady);
console.log('JQ');

//function with event listeners that runs when doc loads
function onReady(){
  console.log('onReady');
  $('#clear').on('click', function(){
    console.log('clear');
  });
} // end onReady

function inputs(){
  console.log($('#inputOne').val());
  $('#inputTwo').val();
}
