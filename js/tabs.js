var temperatureTab = document.getElementsByClassName('temperature-graph');
var rainfallExpectancyTab = document.getElementsByClassName('rainfall-expectancy');
var windTab = document.getElementsByClassName('wind-and-time');

var temperatureClick = document.getElementsByClassName('temp-nav');
temperatureClick[0].addEventListener('click', temperatureTransition);

var precipitationClick = document.getElementsByClassName('precipitation-nav');
precipitationClick[0].addEventListener('click', rainfallExpectancyTransition);

var windClick = document.getElementsByClassName('wind-nav');
windClick[0].addEventListener('click', windTransition);

function temperatureTransition(event) {
    if (temperatureTab[0].classList.contains("active-tab")) {
        temperatureTab[0].classList.remove("active-tab");
        temperatureClick[0].classList.contains("index-page-nav-active");
        temperatureClick[0].classList.remove("index-page-nav-active");
    }
	if (event.target.className === 'temp-nav') {
      rainfallExpectancyTab[0].classList.remove("active-tab");
      windTab[0].classList.remove("active-tab");
      temperatureTab[0].classList.add("active-tab");
      precipitationClick[0].classList.remove("index-page-nav-active");
      windClick[0].classList.remove("index-page-nav-active");
      temperatureClick[0].classList.add("index-page-nav-active");
    }
}

function rainfallExpectancyTransition(event) {
    if (rainfallExpectancyTab[0].classList.contains("active-tab")) {
        rainfallExpectancyTab[0].classList.remove("active-tab");
        precipitationClick[0].classList.contains("index-page-nav-active");
        precipitationClick[0].classList.remove("index-page-nav-active");
    }
    if (event.target.className === 'precipitation-nav') {
       windTab[0].classList.remove("active-tab");
       temperatureTab[0].classList.remove("active-tab");
       rainfallExpectancyTab[0].classList.add("active-tab");
       windClick[0].classList.remove("index-page-nav-active");
       temperatureClick[0].classList.remove("index-page-nav-active");
       precipitationClick[0].classList.add("index-page-nav-active");
    
    }
}
function windTransition(event) {
    if (windTab[0].classList.contains("active-tab")) {
        windTab[0].classList.remove("active-tab");
        windClick[0].classList.contains("index-page-nav-active");
        windClick[0].classList.remove("index-page-nav-active");
    }
    if (event.target.className === 'wind-nav') {
        temperatureTab[0].classList.remove("active-tab");
        rainfallExpectancyTab[0].classList.remove("active-tab");
        windTab[0].classList.add("active-tab");
        temperatureClick[0].classList.remove("index-page-nav-active");
        precipitationClick[0].classList.remove("index-page-nav-active");
        windClick[0].classList.add("index-page-nav-active");
    }
}