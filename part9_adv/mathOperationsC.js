//named export

//commonJs
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

//It is nothing but object.
module.exports = {
  add,
  subtract,
  multiply,
};
