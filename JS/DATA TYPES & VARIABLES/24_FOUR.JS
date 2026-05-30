// Create manual type conversion without Number().

function toNumber(value) {
  return +value;
}

function toNumber(value) {
  return value * 1;
}

function toNumber(value) {
  return value - 0;
}

function manualConvert(value) {
  return +value;
}

console.log(manualConvert("20")); 
console.log(manualConvert(true)); 
console.log(manualConvert("5.5"));