function countChar(string, char) {
    string = string.toLowerCase();
    char = char.toLowerCase();
    var counter = 0;
    for (sym in string) //цикл для перебора
        if (string[sym] == char)
        //вызван для каждого свойства объекта
            counter++;
    return counter;
}

console.log(countChar('My Random String', 't'));