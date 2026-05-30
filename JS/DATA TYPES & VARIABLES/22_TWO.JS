// Check if value is primitive or not.


function isPrimitive(value) {
  return (value !== Object(value));
}

console.log(isPrimitive("JIT"));