var tabs = document.getElementsByClassName('inset');
var button = document.getElementsByClassName('detailedinfo');
var buttonsNavigation = document.getElementById('buttons-navigation');

buttonsNavigation.addEventListener('click', function(event){
    if(event.target.classList.contains('detailedinfo')){
      index = parseInt(event.target.dataset.weatherbutton);
      changeTabs(index);
    }
})

function changeTabs() {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab');
  }
  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove('active2');
  }
  if(index == 0){
    tabs[0].classList.add('active-tab');
    button[0].classList.add('active2');
  }
  else if(index == 1){
    tabs[1].classList.add('active-tab');
    button[1].classList.add('active2');
  }
  else if(index == 2){
    tabs[2].classList.add('active-tab');
    button[2].classList.add('active2');
  }
}