function replaceQuotes(str) {
    var quotes = str.replace(/\b'|'\b/g, '"');
    return quotes;
}

console.log(replaceQuotes("I'm the 'hero'"));
