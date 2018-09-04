var fiveDaysContainer = document.getElementById("fiveDaysContainer");
var elements = document.querySelectorAll(".temperature-daytime");
var elementIndicatorWeekday = document.querySelectorAll(".slider-weekday");

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
      elementIndicatorWeekday[i].classList.contains("active-day");
      elementIndicatorWeekday[i].classList.remove("active-day");

      if (i === elements.length - 1) {
        elements[0].classList.add("active");
        elementIndicatorWeekday[0].classList.add("active-day");
        break;
      }

      elements[i + 1].classList.add("active");
      elementIndicatorWeekday[i + 1].classList.add("active-day");
      break;
    }
  }
}

function previousButton() {
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("active")) {
      elements[i].classList.remove("active");
      elementIndicatorWeekday[i].classList.contains("active-day");
      elementIndicatorWeekday[i].classList.remove("active-day");

      if (i === elements.length - 5) {
        elements[4].classList.add("active");
        elementIndicatorWeekday[4].classList.add("active-day");
        break;
      }

      elements[i - 1].classList.add("active");
      elementIndicatorWeekday[i - 1].classList.add("active-day");
      break;
    }
  }
}
var sliderNavigation = document.getElementById("slider-nav");
sliderNavigation.addEventListener("click", dayButtonsChangeColor);

function dayButtonsChangeColor(event) {
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