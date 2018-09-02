var fiveDaysContainer = document.getElementById("fiveDaysContainer");
var elements = document.querySelectorAll(".temperature-daytime");

fiveDaysContainer.addEventListener("click", navigationArrows);

function navigationArrows(event) {
  if (event.target.className === "next") {
    nextButton();
  }
  if (event.target.className === "previous") {
    previousButton();
  }
}

function nextButton() {
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("active")) {
      elements[i].classList.remove("active");

      if (i === elements.length - 1) {
        elements[0].classList.add("active");
        break;
      }

      elements[i + 1].classList.add("active");
      break;
    }
  }
}

function previousButton() {
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("active")) {
      elements[i].classList.remove("active");

      if (i === elements.length - 5) {
        elements[4].classList.add("active");
        break;
      }

      elements[i - 1].classList.add("active");
      break;
    }
  }
}

var sliderNavigation = document.getElementById("slider-nav");
var elementIndicatorWeekday = document.querySelectorAll(".slider-weekday");

sliderNavigation.addEventListener("click", dayButtonsChange);

function dayButtonsChange(event) {
  if (event.target.className === "slider-weekday") {
    for (var i = 0; i < elementIndicatorWeekday.length; i++) {
      if (elementIndicatorWeekday[i].classList.contains("active-day")) {
        elementIndicatorWeekday[i].classList.remove("active-day");
      }
      event.target.classList.add("active-day");
    }
    for (var i = 0; i < elementIndicatorWeekday.length; i++) {
      if (elementIndicatorWeekday[i].classList.contains("active-day")) {
        var index = i;
      }
    }
    ClickWeekDayButton(index);
  }
}

function ClickWeekDayButton(index) {
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("active")) {
      elements[i].classList.remove("active");
      elements[index].classList.add("active");
      break;
    }
  }
}