// Deep check between null and object.

function isRealObject(value) {
  return value !== null && typeof value === "object";
}