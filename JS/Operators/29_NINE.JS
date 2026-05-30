// Create custom isNumber function.

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}