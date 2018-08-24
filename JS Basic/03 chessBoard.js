function makeChessBoard(even, odd) {
    var chess = '';
    for (var y = 0; y < even; y++) {
        for (var x = 0; x < odd; x++) {
            if ((x + y) % 2 === 0) chess = chess + '#';
            else chess = chess + ' ';
        }
        chess = chess + '\n';
    }
    return chess;
}

console.log(makeChessBoard(4, 8));