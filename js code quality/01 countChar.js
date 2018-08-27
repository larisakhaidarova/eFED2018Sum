function countChar(string, char) {
    string = string.toLowerCase();
    char = char.toLowerCase();
    var counter = 0;
    for (sym in string)
        if (string[sym] == char)
            counter++;
    return counter;
}

console.log(countChar('My Random String', 't'));