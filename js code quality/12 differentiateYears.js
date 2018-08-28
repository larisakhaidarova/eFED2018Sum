function differentiateInYears(earlierDate, laterDate) {
    var years = laterDate.getFullYear() - earlierDate.getFullYear();
    var month = laterDate.getMonth() - earlierDate.getMonth();
    return years + ',' + month;
}

console.log(differentiateInYears(new Date(2014, 0), new Date(2014, 6)));
console.log(differentiateInYears(new Date(2014, 10, 2), new Date(2016, 10, 2)));