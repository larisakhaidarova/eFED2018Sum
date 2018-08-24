function isNumberArray(array) {
    var i = array.length;
    for (i = 0; i < array.length; i++) {
        if (!Number.isNaN(array[i])) {
            return false;
        }
        return true;
    }
}
  
function isArrayTrue(array) {
    for (i = 0; i < array.length; i++) {
        if (Number.isNaN(array[i])) {
            return true;
        }
    } 
    return false;
}
  
console.log(isNumberArray([1, 4, NaN, 6], Number.isNaN));
console.log(isNumberArray([NaN, NaN], Number.isNaN));
console.log(isArrayTrue([1, 2, 6], Number.isNaN));
console.log(isArrayTrue([1, 4, NaN, 6], Number.isNaN));