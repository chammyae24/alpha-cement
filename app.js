const burger = document.getElementsByClassName("burger")[0];
const lineOne = document.getElementsByClassName("line-1")[0];
const lineTwo = document.getElementsByClassName("line-2")[0];
const lineThree = document.getElementsByClassName("line-3")[0];
const navBar = document.getElementsByClassName("navbar-2")[0];
const logoTwo = document.getElementsByClassName("logo-2")[0];

burger.addEventListener("click", makeCross);

function makeCross() {
  burger.classList.toggle("burger-active");

  if (burger.classList.contains("burger-active")) {
    lineOne.style.transform = "rotate(340deg) translateY(7px)";
    lineThree.style.transform = "rotate(-340deg) translateY(-7px)";
    lineTwo.style.transform = "translateX(100px)";
    lineTwo.style.opacity = 0;
    navBar.style.display = "block";
    logoTwo.style.opacity = 0;
    document.body.style.overflowY = "hidden";
  } else {
    lineOne.style.transform = "rotate(0deg) translateY(0px)";
    lineThree.style.transform = "rotate(0deg) translateY(0px)";
    lineTwo.style.transform = "translateX(0px)";
    lineTwo.style.opacity = 1;
    navBar.style.display = "none";
    logoTwo.style.opacity = 1;
    document.body.style.overflowY = "";
  }
}
