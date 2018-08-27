function mergeArrays(...values) {
    var object = {};
    var spread = [].concat(...values);
    for (var i = 0; i < spread.length; i++) {
        var line = spread[i];
        object[line] = true;
    }
    return Object.keys(object);
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));
