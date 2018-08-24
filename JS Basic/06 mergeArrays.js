function mergeArrays(...theArgs) {
    var object = {};
    var spr = [].concat(...theArgs);
    for (var i = 0; i < spr.length; i++) {
        var string = spr[i];
        object[string] = true;
    }
    return Object.keys(object);
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));
