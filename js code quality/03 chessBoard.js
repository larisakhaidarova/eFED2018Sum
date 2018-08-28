function makeChessBoard(height, width) {
    for (var i = 0; i < height; i++) {
        i % 2 == 0 ? createOddLine(width) : createEvenLine(width);
        document.write('<br/>');
    }
}
function createOddLine(width) {
    for (var i = 0; i < width; i++) {
        document.write(i % 2 == 1 ? ' ' : '#');
    }
}
function createEvenLine(width) {
    for (var i = 0; i < width; i++) {
        document.write(i % 2 == 1 ? '#' : ' ');
    }
}
console.log(makeChessBoard(8, 8));
