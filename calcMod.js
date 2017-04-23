function calcMod() {
  if ( operators === "+" ){
    total = x + y;
  }
  else if ( operators === "-" ){
    total = x - y;
  }
  else if ( operators === "/" ){
    total = x / y;
  }
  else if ( operators === "*" ){
    total = x * y;
  }
}

exports.module = calcMod;
