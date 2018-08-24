function makeArray(first, last, step) {
    var arr = [];
    if (step == undefined) {
        step = 1;
    }
    if (step < 0) {
        step = Math.abs(step);
    }
    if (first > last) {
        while (first >= last) {
            arr.push(first);
            first = first - step;
        }
        return arr;
    } else {
        while (first <= last) {
            arr.push(first);
            first = first + step;
        }
        return arr;
    }
}
console.log(makeArray(1, 10));
console.log(makeArray(1, 10, 3));
console.log(makeArray(10, 1, 2));