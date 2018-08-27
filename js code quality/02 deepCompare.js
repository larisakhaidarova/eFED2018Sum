function deepCompare(a, b) {
    var num1 = 0;
    var num2 = 0;
    for (var propName in a) {
        num1++;
    }
    for (propName in b) {
        num2++;
    }
    if (num1 != num2) {
        return false;
    }
    for (propName in a) {
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

console.log(deepCompare({one: 1, two: '2'}, {one: 1, two: '2'}));
console.log(deepCompare({one: 1, two: '2'}, {two: 2}));
console.log(deepCompare({one: 1, two: '2'}, {one: 1, two: 2}));
console.log(deepCompare({one: 1, two: '2'}, {two: '2', one: 1}));