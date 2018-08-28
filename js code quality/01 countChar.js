function countChar(text, char) {
    text = text.toLowerCase();
    char = char.toLowerCase();
    var counter = 0;
    for (sym in text) {
        if (text[sym] == char) {
            counter++;
            return counter;
        }
    }
}

console.log(countChar('My Random String', 't'));
