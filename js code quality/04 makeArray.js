function makeArray(value1, value2, step) {
    var diapason = [];
    if (step == undefined) {
        step = 1;
    }
    if (step < 0) {
        step = Math.abs(step);
    }
    if (value1 > value2) {
        while (value1 >= value2) {
            diapason.push(value1);
            value1 = value1 - step;
        }
        return diapason;
    } else {
        while (value1 <= value2) {
            diapason.push(value1);
            value1 = value1 + step;
        }
        return diapason;
    }
}
console.log(makeArray(1, 10));
console.log(makeArray(1, 10, 3));
console.log(makeArray(10, 1, 2));
