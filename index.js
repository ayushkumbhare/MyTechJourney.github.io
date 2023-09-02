var titles = document.getElementsByClassName("title");
var titlecontents = document.getElementsByClassName("titlecontent");

function changetab(titleName) {
  for (x of titles) {
    x.classList.remove("active");
  }
  for (x of titlecontents) {
    x.classList.remove("activecontent");
  }

  event.currentTarget.classList.add("active");
  document.getElementById(titleName).classList.add("activecontent");
}



var slide = document.getElementById("slidingmenu");
// var close

function openmenu() {
  slide.style.right = "0";
}
function closemenu() {
  slide.style.right = "-200px";
}
function smallscreen() {
  slide.style.right = "-200px";
}
