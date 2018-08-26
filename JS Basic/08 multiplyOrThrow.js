function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw "MultiplicatorUnitFailure";
  }
}
function multiplyMore(a, b) {
  try {
    return multiplyOrThrow(a, b);
  } catch (error) {
    console.log(error);
    return multiplyMore(a, b);
  }
}
console.log(multiplyMore(3, 5));
