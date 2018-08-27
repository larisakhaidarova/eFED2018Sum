function differentiateInYears(earlierDate, laterDate) {
    var totalDifference = laterDate.getTime() - earlierDate.getTime();
    var result = new Object();

    result.years = Math.floor(totalDifference / 1000 / 60 / 60 / 24 / 365);
    totalDifference = totalDifference - result.years * 1000 * 60 * 60 * 24 * 365;

    result.days = Math.floor(totalDifference / 1000 / 60 / 60 / 24);
    totalDifference = totalDifference - result.days * 1000 * 60 * 60 * 24;

    return result;
}
console.log(differentiateInYears(new Date(2009, 10, 2), new Date(2016, 10, 2)));
console.log(differentiateInYears(new Date(2014, 0), new Date(2014, 6)));