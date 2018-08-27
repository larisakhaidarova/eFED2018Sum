function findNumbers(array) {
    var numbersArray = [];
    for (var i = 0; i < array.length; i++) {
        if (isNumber(array[i]))
        {numbersArray.push(array[i]);}
    }
    return numbersArray;
}
  
function isNumber(value) {
    if (value == '.') return false;
    var regExp = /^[+-]?[0-9]*[.]?[0-9]*([eE][+-]?[0-9]*)?$/;
    return !!regExp.exec(value);
}

console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));
console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));